import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Applayout from "./pages/Applayout";
import Cart from "./pages/Cart";
import PageNotFound from "./pages/PageNotFound";
import Products from "./pages/Products";
import WIshlist from "./pages/WIshlist";
import Profile from "./pages/Profile";
import About from "./pages/About";
import SingleProduct from "./features/products/SingleProduct";
import SignUpPage from "./features/authentication/SignUpPage";
import LoginPage from "./features/authentication/LoginPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import Checkout from "./pages/Checkout";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        cacheTime: 600 * 1000,
      },
    },
  });

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <Applayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="products" element={<Products />} />
              <Route path="wishlist" element={<WIshlist />} />
              <Route path="about" element={<About />} />
              <Route path="profile" element={<Profile />} />
              <Route path="singleProduct/:id" element={<SingleProduct />} />
              <Route path="checkout" element={<Checkout/>} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-right"
          reverseOrder="false"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 1000,
            },
            error: {
              duration: 2000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              background: "",
              color: "",
            },
          }}
        />
      </QueryClientProvider>
    </div>
  );
};

export default App;
