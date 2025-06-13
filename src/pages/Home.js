// // src/pages/Home.js
// import React, { useEffect, useState } from "react";
// import { fetchProductByHandle } from "../utils/shopify";
// import { Link } from "react-router-dom";

// export default function Home() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `
//         {
//           products(first: 10) {
//             edges {
//               node {
//                 id
//                 title
//                 handle
//                 description
//                 images(first: 1) {
//                   edges {
//                     node {
//                       url
//                     }
//                   }
//                 }
//                 variants(first: 1) {
//                   edges {
//                     node {
//                       id
//                       price {
//                         amount
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       `;
//       const data = await fetchProductByHandle(query);

//       if (data && data.products) {
//         setProducts(data.products.edges);
//       } else {
//         console.error("No products found or data is null");
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="product-list">
//       {products.map(({ node }) => (
//         <div key={node.id} className="product-card">
//           <img src={node.images.edges[0]?.node.url} alt={node.title} />
//           <h3>{node.title}</h3>
//           <p>₹ {node.variants.edges[0].node.price.amount}</p>
//           <Link to={`/product/${node.handle}`}>View</Link>
//         </div>
//       ))}
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import { fetchProductByHandle } from "../utils/shopify";
// import { Link } from "react-router-dom";

// export default function Home() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const query = `
//         {
//           products(first: 10) {
//             edges {
//               node {
//                 id
//                 title
//                 handle
//                 description
//                 images(first: 1) {
//                   edges {
//                     node {
//                       url
//                     }
//                   }
//                 }
//                 variants(first: 1) {
//                   edges {
//                     node {
//                       id
//                       price {
//                         amount
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       `;

//       const data = await fetchProductByHandle(query);

//       if (data?.products?.edges) {
//         setProducts(data.products.edges);
//       } else {
//         console.error("❌ No product data loaded.");
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="product-list">
//       <h2>📦 Products</h2>
//       {products.length === 0 && <p>Loading or no products available...</p>}
//       {products.map(({ node }) => (
//         <div key={node.id} className="product-card">
//           <img src={node.images.edges[0]?.node.url} alt={node.title} />
//           <h3>{node.title}</h3>
//           <p>₹ {node.variants.edges[0].node.price.amount}</p>
//           <Link to={`/product/${node.handle}`}>View</Link>
//         </div>
//       ))}
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import shopifyApi from '../utils/shopify';
import { Link } from 'react-router-dom';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `
        {
          products(first: 10) {
            edges {
              node {
                id
                title
                handle
                description
                images(first: 1) { edges { node { url } } }
                variants(first: 1) { edges { node { id price { amount } } } }
              }
            }
          }
        }
      `;
      const data = await shopifyApi(query);
      setProducts(data.products.edges);
    };
    fetchProducts();
  }, []);

  return (
    <div id="home-page" className="product-list">
      {products.map(({ node }) => (
        <div key={node.id} className="product-card">
          <img src={node.images.edges[0]?.node.url} alt={node.title} className="product-image" />
          <h3 className="product-title">{node.title}</h3>
          <p className="product-price">${node.variants.edges[0].node.price.amount}</p>
          <Link to={`/product/${node.handle}`} className="view-button">View</Link>
        </div>
      ))}
    </div>
  );
}
