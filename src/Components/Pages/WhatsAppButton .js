import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const WhatsAppButton = () => {
  const whatsappNumber = "9552314201";
  const whatsappMessage = "Please help me to join gym";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank"
    );
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg"
      onClick={openWhatsApp}
    >
      <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-7" />
    </button>
  );
};

export default WhatsAppButton;
