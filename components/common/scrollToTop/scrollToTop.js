import React, { useEffect, useState } from "react";
import { TbArrowTopCircle } from "react-icons/tb";

const ScrollToTop = () => {
  let [showBottomToTopButton, setShowBottomToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollBar);
  }, []);

  const handleScrollBar = () => {
    let windowHeight = window.scrollY;
    if (windowHeight > 850) {
      setShowBottomToTopButton(true);
    } else if (windowHeight < 850) {
      setShowBottomToTopButton(false);
    }
  };

  return (
    <>
      {showBottomToTopButton && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          style={{
            position: "fixed",
            padding: "5px 5px",
            borderRadius: "50%",
            fontSize: "20px",
            bottom: "40px",
            right: "10px",
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
            color: "#fff",
            textAlign: "center",
            zIndex: 100,
          }}
        >
          <TbArrowTopCircle size={40} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
