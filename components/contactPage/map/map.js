import React from "react";

const MapSection = () => {
  return (
    <div className="py-14">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1798.6251560054814!2d88.6299673!3d25.6298166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fb4d7c86586651%3A0xfe9f68bc4ee81f32!2sGraphics%20View%20Point!5e0!3m2!1sen!2sbd!4v1684727199026!5m2!1sen!2sbd"
        width="100%"
        height="550"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapSection;
