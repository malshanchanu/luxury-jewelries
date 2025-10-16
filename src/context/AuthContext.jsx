import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cc_user");
      if (saved) setUser(JSON.parse(saved));
    } catch (e) {
      // ignore
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async ({ email, password }) => {
    // Fake auth: accept any non-empty credentials; replace with real auth later
    if (!email || !password) throw new Error("Email and password are required");
    const fakeUser = { id: "u1", name: "Crystal Collector", email };
    setUser(fakeUser);
    localStorage.setItem("cc_user", JSON.stringify(fakeUser));
    return fakeUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("cc_user");
  };

  const value = useMemo(() => ({ user, isLoading, login, logout }), [user, isLoading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}


