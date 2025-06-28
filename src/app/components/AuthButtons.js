"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButtons() {
  const { data: session } = useSession();

  const buttonStyle = {
    padding: "10px 20px",
    marginTop: "10px",
    marginRight: "10px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#0070f3",
    color: "#fff",
    transition: "background-color 0.3s",
  };

  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = "#0059c1";
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "#0070f3";
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {session ? (
        <>
          <p>Signed in as {session.user.email}</p>
          <button
            style={buttonStyle}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </>
      ) : (
        <button
          style={buttonStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
}
