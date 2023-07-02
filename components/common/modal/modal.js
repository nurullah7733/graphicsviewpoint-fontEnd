import React, { useState } from "react";
import Rodal from "rodal";

// include styles
import "rodal/lib/rodal.css";

const Modals = () => {
  const [show, setShow] = useState(false);

  const isOpenModal = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={isOpenModal}>show</button>

      <Rodal visible={show} onClose={isOpenModal}>
        <div>Content</div>
      </Rodal>
    </div>
  );
};

export default Modals;
