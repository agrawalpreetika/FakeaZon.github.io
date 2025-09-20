// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import { Routes, Route, Link } from 'react-router-dom'
// import { Home } from './pages/Home'
// import { Cart } from './pages/Cart'
// import { WishList } from './pages/WishList'
// import { ProductPage } from './pages/ProductPage'
// import { AuthLogin } from './pages/AuthLogin'



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/wishlist" element={<WishList />} />
//       <Route path="/products" element={<ProductPage />} />
//       <Route path="/auth/login" element={<AuthLogin />} />
//     </Routes>
//   )
// }

// export default App


import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { WishList } from './pages/WishList'
import { ProductPage } from './pages/ProductPage'
import { AuthLogin } from './pages/AuthLogin'
import { AuthSignup } from './pages/AuthSignup'
import { ProtectedRoute } from './components/ProtectedRoute' // adjust path if needed
import { ProductDetails } from './pages/ProductDetails'
import { About } from './pages/About'
import { Checkout } from './pages/Checkout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <WishList />
          </ProtectedRoute>
        }
      />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/auth/login" element={<AuthLogin />} />
      <Route path="/auth/signup" element={<AuthSignup />} />
      <Route path="/products/:id" element={<ProductDetails />} /> {/* New route for product details */}
      <Route path="/about" element={<About />} />
      <Route path="/checkout" element={
        <ProtectedRoute>
          <Checkout />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default App
