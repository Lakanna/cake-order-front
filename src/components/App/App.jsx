import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { Toaster } from "react-hot-toast";
import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage"));
const OrderPage = lazy(() => import("../../pages/OrderPage"));
const GalleryPage = lazy(() => import("../../pages/GalleryPage"));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Toaster />
    </Layout>
  );
}

export default App;
