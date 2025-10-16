import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Payment folder imports
import JewelryCheckout from "./components/payment/JewelryCheckout";
import PaymentMethod from "./components/payment/PaymentMethod";
import PayPalIntegration from "./components/payment/PayPalIntegration";
import StripeIntegration from "./components/payment/StripeIntegration";
import PaymentHistory from "./components/payment/PaymentHistory";
import InsuranceOptions from "./components/payment/InsuranceOptions";
import ShippingInsurance from "./components/payment/ShippingInsurance";
import JewelryInvoice from "./components/payment/JewelryInvoice"; // Added this import

// Certification folder imports
import CertificationUpload from "./components/certification/CertificationUpload";
import CertificationViewer from "./components/certification/CertificationViewer";
import GIACertificate from "./components/certification/GIACertificate";
import AGSCertificate from "./components/certification/AGSCertificate";
import AppraisalDocument from "./components/certification/AppraisalDocument";
import AuthenticityVerification from "./components/certification/AuthenticityVerification";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function App() {
    return (
        <Router>
            <div>
                {/* Navigation Menu */}
                <nav style={{ padding: "10px", background: "#f0f0f0" }}>
                    <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
                    <Link to="/checkout" style={{ marginRight: "15px" }}>Checkout</Link>
                    <Link to="/payment-method" style={{ marginRight: "15px" }}>Payment Method</Link>
                    <Link to="/payment-history" style={{ marginRight: "15px" }}>Payment History</Link>
                    <Link to="/insurance-options" style={{ marginRight: "15px" }}>Insurance</Link>
                    <Link to="/shipping-insurance" style={{ marginRight: "15px" }}>Shipping Insurance</Link>
                    <Link to="/invoice" style={{ marginRight: "15px" }}>Invoice</Link> {/* Added this link */}
                    <Link to="/upload-cert" style={{ marginRight: "15px" }}>Upload Cert</Link>
                    <Link to="/view-cert" style={{ marginRight: "15px" }}>View Cert</Link>
                    <Link to="/gia-certificate" style={{ marginRight: "15px" }}>GIA Cert</Link>
                    <Link to="/ags-certificate" style={{ marginRight: "15px" }}>AGS Cert</Link>
                    <Link to="/appraisal-doc" style={{ marginRight: "15px" }}>Appraisal</Link>
                    <Link to="/auth-verification" style={{ marginRight: "15px" }}>Authenticity</Link>
                </nav>

                {/* Page Routing */}
                <Routes>
                    <Route path="/" element={<h1 style={{ textAlign: "center", marginTop: "40px" }}>💎 Welcome to CrystalCrown Jewelry App</h1>} />

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
                    <Route path="/invoice" element={<JewelryInvoice />} /> {/* Added this route */}

                    {/* Certification routes */}
                    <Route path="/upload-cert" element={<CertificationUpload />} />
                    <Route path="/view-cert" element={<CertificationViewer />} />
                    <Route path="/gia-certificate" element={<GIACertificate />} />
                    <Route path="/ags-certificate" element={<AGSCertificate />} />
                    <Route path="/appraisal-doc" element={<AppraisalDocument />} />
                    <Route path="/auth-verification" element={<AuthenticityVerification />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;