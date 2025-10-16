import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Site chrome
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import HomePage from "./Pages/HomePage";
import JewelryListPage from "./Pages/JewelryListPage";
import JewelryDetails from "./Pages/JewelryDetails";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

// Payments
import JewelryCheckout from "./components/payment/JewelryCheckout";
import PaymentMethod from "./components/payment/PaymentMethod";
import PayPalIntegration from "./components/payment/PayPalIntegration";
import StripeIntegration from "./components/payment/StripeIntegration";
import PaymentHistory from "./components/payment/PaymentHistory";
import InsuranceOptions from "./components/payment/InsuranceOptions";
import ShippingInsurance from "./components/payment/ShippingInsurance";
import JewelryInvoice from "./components/payment/JewelryInvoice";

// Certification
import CertificationUpload from "./components/certification/CertificationUpload";
import CertificationViewer from "./components/certification/CertificationViewer";
import GIACertificate from "./components/certification/GIACertificate";
import AGSCertificate from "./components/certification/AGSCertificate";
import AppraisalDocument from "./components/certification/AppraisalDocument";
import AuthenticityVerification from "./components/certification/AuthenticityVerification";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { ThemeProvider } from "./context/ThemeContext";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function NotFound() {
    return (
        <div style={{ padding: "120px 20px", textAlign: "center" }}>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for doesn't exist.</p>
        </div>
    );
}

function App() {
    return (
        <Router>
            <ThemeProvider>
                <AuthProvider>
                    <div className="app-root" style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
                        <Navbar />
                        <main style={{ flex: 1, paddingTop: 60 }}>
                            <Routes>
                            {/* Core site pages */}
                            <Route path="/" element={<HomePage />} />
                            <Route path="/jewelry" element={<JewelryListPage />} />
                            <Route path="/jewelry/:id" element={<JewelryDetails />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

                            {/* Payment routes */}
                            <Route
                                path="/checkout"
                                element={
                                    <Elements stripe={stripePromise}>
                                        <JewelryCheckout />
                                    </Elements>
                                }
                            />
                            <Route path="/payment-method" element={<PaymentMethod />} />
                            <Route path="/paypal" element={<PayPalIntegration />} />
                            <Route
                                path="/stripe"
                                element={
                                    <Elements stripe={stripePromise}>
                                        <StripeIntegration amount={299.99} jewelryItem={{ id: 1, title: "Diamond Ring" }} />
                                    </Elements>
                                }
                            />
                            <Route path="/payment-history" element={<PaymentHistory />} />
                            <Route path="/insurance-options" element={<InsuranceOptions />} />
                            <Route path="/shipping-insurance" element={<ShippingInsurance />} />
                            <Route path="/invoice" element={<JewelryInvoice />} />

                            {/* Certification routes */}
                            <Route path="/upload-cert" element={<CertificationUpload />} />
                            <Route path="/view-cert" element={<CertificationViewer />} />
                            <Route path="/gia-certificate" element={<GIACertificate />} />
                            <Route path="/ags-certificate" element={<AGSCertificate />} />
                            <Route path="/appraisal-doc" element={<AppraisalDocument />} />
                            <Route path="/auth-verification" element={<AuthenticityVerification />} />

                                {/* 404 */}
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </main>
                        <Footer />
                    </div>
                </AuthProvider>
            </ThemeProvider>
        </Router>
    );
}

export default App;