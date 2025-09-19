import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/cart-context'
import { WishListProvider } from './context/wishlist-context.jsx'
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from './context/login-context.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <LoginProvider>
      <CartProvider>
        <WishListProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </WishListProvider>
      </CartProvider>
    </LoginProvider>
  </StrictMode>
)


