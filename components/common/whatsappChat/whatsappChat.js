import React, { useEffect, useState } from "react";
import { TbArrowTopCircle } from "react-icons/tb";

const WhatsappChat = () => {
  return (
    <>
      <a
        aria-label="Chat on WhatsApp"
        target="_blank"
        href="https://wa.me/+8801328613629?text=Hi"
        style={{
          position: "fixed",
          padding: "5px 5px",

          fontSize: "20px",
          bottom: "40px",
          right: "40px",

          color: "#fff",
          textAlign: "center",
          zIndex: 100,
        }}
      >
        <img
          alt="Chat on WhatsApp"
          src="/assets/img/logo/WhatsAppButtonGreenMedium.svg"
        />
      </a>
    </>
  );
};

export default WhatsappChat;
