
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import shopifyApi from '../utils/shopify';
import { useCart } from '../context/CartContext';

export default function Product() {
    const { handle } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProduct = async () => {
            const query = `
        query ($handle: String!) {
          productByHandle(handle: $handle) {
            id
            title
            descriptionHtml
            images(first: 1) { edges { node { url } } }
            variants(first: 1) { edges { node { id price { amount } } } }
          }
        }
      `;
            const data = await shopifyApi(query, { handle });
            setProduct(data.productByHandle);
        };
        fetchProduct();
    }, [handle]);

    if (!product) return <p>Loading...</p>;

    const variant = product.variants.edges[0]?.node;

    return (
        <div id="product-page" className="product-detail">
            <img
                src={product.images.edges[0].node.url}
                alt={product.title}
                className="product-image"
            />
            <h1 className="product-title">{product.title}</h1>
            <p className="product-description" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
            <p className="product-price">${variant.price.amount}</p>
            <button
                className="add-to-cart-button"
                onClick={() => {
                    addToCart({
                        title: product.title,
                        variantId: variant.id,
                        price: variant.price.amount,
                    });
                }}
            >
                Add to Cart
            </button>
        </div>
    );
}
