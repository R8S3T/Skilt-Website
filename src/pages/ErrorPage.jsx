import React from "react";

const ErrorPage = () => {
    return (
        <div
        style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            background: "#f4f4f4",
            textAlign: "center",
        }}
        >
        <img
            src="/images/error.png"
            alt="Fehler"
            style={{ width: "200px", height: "200px", marginBottom: "20px" }}
        />
        <h2 style={{ fontSize: "1.5rem", marginBottom: "10px", color: "#222" }}>
            Da ist wohl etwas schiefgelaufen.
        </h2>
        <p style={{ fontSize: "1rem", color: "#555" }}>
            Bitte lade die Seite neu oder versuche es später erneut.
        </p>
        <a
            href="/"
            style={{
            marginTop: "1.5rem",
            textDecoration: "none",
            color: "#e8630a",
            fontWeight: "bold",
            }}
        >
            🔄 Zur Startseite
        </a>
        </div>
    );
};

export default ErrorPage;
