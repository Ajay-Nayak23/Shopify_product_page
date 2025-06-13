# 🛍️ Shopify Product Page

This is a React-based frontend application that displays products from a Shopify Storefront using the Shopify Storefront GraphQL API. It allows users to browse products, view product details, add them to a cart, and proceed to checkout using Shopify’s hosted checkout.

## 🚀 Live Demo

🔗 [Deployed on Netlify](https://snazzy-wisp-0caef2.netlify.app/)

## 📸 Features

- ✅ Fetches and displays product data from Shopify
- ✅ Product detail view with image, description, and price
- ✅ Add-to-cart functionality using global state
- ✅ Cart summary page with checkout redirect to Shopify
- ✅ Responsive UI with a custom color palette
- ✅ Secure API handling with `.env` and Netlify environment variables

## 🧩 Tech Stack

- **React** (with Hooks)
- **React Router**
- **Shopify Storefront GraphQL API**
- **React Context API** for global cart state
- **CSS** for styling (custom palette)

## 🗂️ Project Structure

    src/
    ├── components/
    │ ├── Home.js
    │ ├── Product.js
    │ └── Cart.js
    ├── context/
    │ └── CartContext.js
    ├── utils/
    │ └── shopify.js
    ├── App.js
    ├── index.js
    └── styles/
    └── style1.css

Shopify Storefront API Setup
To run this project, you’ll need to connect it to your Shopify store using the Storefront API. Follow these steps:

    1. Create a Shopify Partner Account (if you don't have one)
    Visit: https://partners.shopify.com/

Create a new Development Store under "Stores" > "Add store" > "Create development store"

2. Create a Storefront Access Token
   
        In your development store admin, go to
        Apps → Develop apps → Create a new app (e.g., “Storefront Client”)
        
        Under Storefront API → click Configure Storefront API scopes
        
        Select:
        
        Read products and collections
        
        Read product tags
        
        (Add more if needed)
        
        Click Save, then click Install app

        Scroll down and click Create storefront access token

        Copy the Access Token and Shop domain

 3. Configure Environment Variables

        In your .env file:
          REACT_APP_SHOPIFY_DOMAIN=your-shop-name.myshopify.com
          REACT_APP_SHOPIFY_STOREFRONT_TOKEN=your-access-token
   
    
## 🔐 Environment Variables

Create a `.env` file in the root of your project with the following:

    REACT_APP_SHOPIFY_DOMAIN=your-shop-name.myshopify.com
    REACT_APP_SHOPIFY_STOREFRONT_TOKEN=your-storefront-access-token


These are securely managed via Netlify's environment settings in production.

## 📦 Deployment

This app is deployed via **Netlify**. To deploy it yourself:

1. Push the code to a GitHub repo
2. Go to [Netlify](https://netlify.com/)
3. Connect your GitHub repository
4. Set the build command: `npm run build`
5. Set the publish directory: `build`
6. Add your `.env` keys to **Netlify > Site Settings > Environment Variables**

## 🧪 Future Improvements

- Add quantity selection and cart item updates
- Add filtering and search
- Implement user login with Shopify Multipass or Firebase

 
