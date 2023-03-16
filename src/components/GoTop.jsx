import React, { useEffect, useState } from "react";

import totop from "../Assets/img/gototop.png";

const GoTop = ({ id }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 350) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      {showButton && (
        <a href={`#${id}`} className="back-to-top">
          <img src={totop} className="image-fluid" alt="" />
        </a>
      )}
    </>
  );
};

export default GoTop;
