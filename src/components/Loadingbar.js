import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Loadingbar() {
  const progRef = useRef("progress");
  const loading = useSelector((state) => state.loading);
  const progress = loading.progress;
  const height = "5px";

  useEffect(() => {
    if (progress) {
      setTimeout(() => {
        progRef.current.style.width = `${progress}%`;
      }, 0);
    }
  }, [progress]);

  return (
    <div style={{ marginTop: "10px", width: `100%`, minHeight: "100vh" }}>
      <div
        ref={progRef}
        style={{
          transition: "1s width ease-in",
          width: `0%`,
          maxWidth: "100%",
          backgroundColor: "#a1b3b0",
          height,
        }}
      ></div>
    </div>
  );
}

export default Loadingbar;
