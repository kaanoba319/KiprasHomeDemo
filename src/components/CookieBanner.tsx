"use client";

import { useState } from "react";
import PolicyModal from "./PolicyModal";
const CookieBanner = () => {
  const [isAccepted, setIsAccepted] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);

  if (isAccepted) return null; // Kabul edildiğinde banner kaldırılır.

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">
          Bu web sitesi çerezleri kullanır. Deneyiminizi geliştirmek için çerez
          politikasını kabul edin.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setIsAccepted(true)}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            Kabul Et
          </button>
          <button
            onClick={() => {
              alert("Tüm çerezler reddedildi."), setIsAccepted(true);
            }}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          >
            Tümünü Reddet
          </button>
          <button
            onClick={() => setShowPolicy(true)}
            className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded"
          >
            Politikalar
          </button>
        </div>
      </div>
      {showPolicy && <PolicyModal onClose={() => setShowPolicy(false)} />}
    </div>
  );
};

export default CookieBanner;
