import React, { useEffect } from 'react';
import shopifyApi from './api/shopify';

const PRODUCT_QUERY = `
{
  products(first: 5) {
    edges {
      node {
        id
        title
        description
        images(first: 1) {
          edges {
            node {
              url
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
`;

const ProductList = () => {
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await shopifyApi(PRODUCT_QUERY);
                console.log(data);
            } catch (err) {
                console.error("Fetch failed:", err);
            }
        };

        fetchProducts();
    }, []);

    return <div>Loading products...</div>;
};

export default ProductList;
