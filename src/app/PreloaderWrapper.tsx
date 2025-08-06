"use client";
import React, { useEffect, useState } from "react";

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let domLoaded = false;
    let timerDone = false;
    const tryShow = () => {
      if (mounted) setLoading(true);
    };
    const tryHide = () => {
      if (domLoaded && timerDone) setLoading(false);
    };
    tryShow();
    const timer = setTimeout(() => {
      timerDone = true;
      tryHide();
    }, 2000);
    const onReady = () => {
      domLoaded = true;
      tryHide();
    };
    if (document.readyState === "complete" || document.readyState === "interactive") {
      domLoaded = true;
      tryHide();
    } else {
      window.addEventListener("DOMContentLoaded", onReady);
    }
    return () => {
      clearTimeout(timer);
      window.removeEventListener("DOMContentLoaded", onReady);
    };
  }, [mounted]);

  return (
    <>
      {mounted && loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            transition: "opacity 0.4s",
          }}
        >
          <img src="/assets/InfinityLoader.gif" alt="Loading..." style={{ width: 120, height: 120 }} />
        </div>
      )}
      <div style={{ opacity: mounted && loading ? 0 : 1, transition: "opacity 0.4s" }}>
        {children}
      </div>
    </>
  );
}
