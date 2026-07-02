
"use client";

export default function SettingsPage() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1>Settings</h1>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <button
          onClick={() => (window.location.href = "/edit-profile")}
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Edit Profile
        </button>

        <button
          onClick={logout}
          style={{
            padding: "14px",
            borderRadius: "10px",
            border: "none",
            background: "#ff0050",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

