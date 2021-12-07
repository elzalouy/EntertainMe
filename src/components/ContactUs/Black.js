import React, { useEffect } from "react";

const Black = () => {
  useEffect(() => {
    window.tawk.onLoad = function () {
      window.tawk.maximize();
    };
    window.tawk.onChatMinimized = function () {
      window.tawk.maximize();
    };
  }, []);
  return (
    <div
      style={{ width: "100%", height: "100%", backgroundColor: "black" }}
    ></div>
  );
};
export default Black;
