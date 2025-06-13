// import shopifyApi from './utils/shopify'; // adjust path if needed
import { fetchProductByHandle } from './utils/shopify';
const testQuery = `
{
  products(first: 3) {
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

fetchProductByHandle(testQuery)
    .then(data => console.log('✅ Products:', data.products))
    .catch(err => console.error('❌ Error fetching products:', err));
