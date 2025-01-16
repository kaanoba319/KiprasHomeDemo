// components/Cookie.tsx
"use client";

import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-message">
        <p>
          We use cookies to enhance your experience. By continuing to visit this
          site, you agree to our use of cookies.{" "}
          <a href="/privacy-policy" className="cookie-link">
            Learn more
          </a>
          .
        </p>
      </div>
      <button onClick={handleAccept} className="cookie-button">
        Accept
      </button>
    </div>
  );
};

export default CookieBanner;
