import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/profile";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await login({ email, password });
      navigate(from, { replace: true });
    } catch (e) {
      setError(e.message || "Login failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <style>{`
        .login-page { padding: 120px 0 60px; min-height: 100vh; }
        .login-card { max-width: 480px; margin: 0 auto; padding: 2rem; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); backdrop-filter: blur(10px); }
        .login-title { text-align: center; margin-bottom: 1rem; }
        .login-sub { text-align: center; color: var(--muted); margin-bottom: 2rem; }
        .field { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1rem; }
        .input { padding: 0.9rem 1rem; border-radius: 10px; background: #0f1218; color: var(--text); border: 1px solid rgba(255,255,255,0.08); }
        .error { color: #ff6b6b; margin-bottom: 1rem; }
        .submit { width: 100%; }
      `}</style>

      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-sub">Sign in to continue your luxury journey</p>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button className="button-primary submit" disabled={submitting}>{submitting ? "Signing in..." : "Sign In"}</button>
        </form>
      </div>
    </div>
  );
};

export default Login;


