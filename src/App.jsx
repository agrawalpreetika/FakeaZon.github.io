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
import { AdminProducts } from './pages/AdminProducts'
import { OrderHistory } from './pages/OrderHistory'
import { AdminLogin } from './pages/AdminLogin'

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
      <Route path="/orders" element={
        <ProtectedRoute>
          <OrderHistory />
        </ProtectedRoute>
      } />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/products" element={<AdminProducts />} />
    </Routes>
  )
}

export default App
