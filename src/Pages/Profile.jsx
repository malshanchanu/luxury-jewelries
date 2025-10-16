import React from "react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="profile-page">
      <style>{`
        .profile-page { padding: 120px 0 60px; min-height: 100vh; }
        .profile-card { max-width: 720px; margin: 0 auto; padding: 2rem; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; box-shadow: 0 20px 40px rgba(0,0,0,0.3); }
        .row { display: grid; grid-template-columns: 160px 1fr; gap: 1rem; align-items: center; }
        .avatar { width: 120px; height: 120px; border-radius: 50%; background: linear-gradient(135deg, var(--accent), var(--accent-2)); display: flex; align-items: center; justify-content: center; color: #0b0b0c; font-size: 48px; font-weight: 700; }
        .meta { color: var(--muted); }
        .actions { display: flex; gap: 1rem; margin-top: 1.5rem; }
      `}</style>

      <div className="profile-card">
        <div className="row">
          <div className="avatar">{user.name?.[0] || "C"}</div>
          <div>
            <h1>{user.name}</h1>
            <div className="meta">{user.email}</div>
            <div className="actions">
              <button className="button-primary" onClick={logout}>Log Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;


