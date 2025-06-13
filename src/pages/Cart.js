
import React from 'react';
import { useCart } from '../context/CartContext';
import shopifyApi from '../utils/shopify';

export default function Cart() {
  const { cart } = useCart();

  const proceedToCheckout = async () => {
    const mutation = `
      mutation cartCreate($input: CartInput!) {
        cartCreate(input: $input) {
          cart {
            id
            checkoutUrl
          }
          userErrors {
            field
            message
          }
        }
      }
    `;

    const lines = cart.map(item => ({
      merchandiseId: item.variantId,
      quantity: 1,
    }));

    try {
      const data = await shopifyApi(mutation, {
        input: {
          lines,
        },
      });

      console.log("📦 cartCreate full response:", data);

      const cartObj = data?.cartCreate?.cart;
      if (!cartObj || !cartObj.checkoutUrl) {
        console.error("❌ cartCreate returned invalid response:", data);
        alert("Cart creation failed.");
        return;
      }

      window.location.href = cartObj.checkoutUrl;
    } catch (error) {
      console.error("❌ Error during cart creation:", error);
      alert("An error occurred while trying to create checkout.");
    }
  };

  return (
    <div id="cart-page" className="cart-summary">
      <h2 className="cart-heading">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, idx) => (
            <div key={idx} className="cart-item">
              <p className="cart-item-title">{item.title}</p>
              <p className="cart-item-price">${item.price}</p>
            </div>
          ))}
          <button className="checkout-button" onClick={proceedToCheckout}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}
