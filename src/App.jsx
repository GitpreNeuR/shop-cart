import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Sidebar, Footer, Toast, ErrorBoundary } from './components';
import { useProductsContext } from './context/products_context';
import 'react-toastify/dist/ReactToastify.css';

import {
  Home,
  About,
  Products,
  Cart,
  SingleProduct,
  Checkout,
  Error,
  Login,
  Register,
  Forgot,
  Reset,
  OrdersPage,
  PrivateRoute,
  ProfilePage,
} from './pages';

function App() {
  const { isSidebarOpen } = useProductsContext();
  const overflowPropertyToHideScroll = isSidebarOpen ? 'hidden' : 'scroll';

  return (
    <div style={{ maxHeight: '100vh', overflow: overflowPropertyToHideScroll }}>
      <Router>
        <Toast />
        <Navbar />
        <Sidebar />

        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />

            {/* Auth routes using PrivateRoute wrapper */}
            <Route path="/login" element={<PrivateRoute><Login /></PrivateRoute>} />
            <Route path="/register" element={<PrivateRoute><Register /></PrivateRoute>} />
            <Route path="/forgot-password" element={<PrivateRoute><Forgot /></PrivateRoute>} />
            <Route path="/reset-password" element={<PrivateRoute><Reset /></PrivateRoute>} />

            <Route path="/products/:id" element={<SingleProduct />} />

            <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
            <Route path="/orders" element={<PrivateRoute><OrdersPage /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />

            {/* Catch-all 404 */}
            <Route path="*" element={<Error />} />
          </Routes>
        </ErrorBoundary>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
