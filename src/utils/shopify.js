// import axios from 'axios';

// const shopifyApi = async (query, variables = {}) => {
//     const url = `https://${process.env.REACT_APP_SHOPIFY_DOMAIN}/api/${process.env.REACT_APP_SHOPIFY_API_VERSION}/graphql.json`;

//     const headers = {
//         'Content-Type': 'application/json',
//         'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_SHOPIFY_STOREFRONT_TOKEN,
//     };

//     const response = await axios.post(
//         url,
//         JSON.stringify({ query, variables }),
//         { headers }
//     );

//     return response.data.data;
// };

// export default shopifyApi;

// src/utils/shopify.js
import axios from 'axios';

const shopifyApi = async (query, variables = {}) => {
    const url = `https://${process.env.REACT_APP_SHOPIFY_DOMAIN}/api/${process.env.REACT_APP_SHOPIFY_API_VERSION}/graphql.json`;

    const headers = {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_SHOPIFY_STOREFRONT_TOKEN,
    };

    try {
        const response = await axios.post(
            url,
            JSON.stringify({ query, variables }),
            { headers }
        );

        const { data } = response;

        // Handle top-level GraphQL errors
        if (data.errors) {
            console.error("❗ Top-level GraphQL errors:", data.errors);
            throw new Error(data.errors.map(e => e.message).join(", "));
        }

        return data.data;
    } catch (error) {
        console.error("💥 Shopify API error:", error);
        throw error;
    }
};

export default shopifyApi;
