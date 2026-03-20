import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import ProductForm from "./components/ProductForm";
import Login from "./components/Login";
import Register from "./components/Register";
import Footer from "./components/Footer";

function App() {
  // Läs in inloggad användare från localStorage
  // (Sparat vid Login för att komma ihåg vem som surfar på webbshoppen)
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  // Hantera utloggning och tvinga sidan att ladda om för att återställa state.
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* 
        Navigationsmeny (Navbar) 
        Kopplad till ikoner och länkar för routing utan fullständig sidomladdning.
      */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              Digital Marketplace
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <FaShoppingBag />
                  </Link>
                </li>
                {/* Endast inloggade administratörer får tillgång till "Skapa Produkt"-länken */}
                {user && user.role === "admin" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/products/new">
                      New Product
                    </Link>
                  </li>
                )}
              </ul>
              <ul className="navbar-nav ms-auto align-items-center">
                {user ? (
                  <>
                    <li className="nav-item me-3">
                      <span className="navbar-text text-white">
                        {user.role === "admin" ? "Admin" : "User"}: {user.name}
                      </span>
                    </li>
                    <li className="nav-item">
                      <button
                        className="btn nav-link text-white"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>

        {/* Main content container */}
        <div className="container mt-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            {/* Admin-only routes */}
            <Route
              path="/products/new"
              element={
                user && user.role === "admin" ? (
                  <ProductForm />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
            <Route
              path="/products/:id/edit"
              element={
                user && user.role === "admin" ? (
                  <ProductForm />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
