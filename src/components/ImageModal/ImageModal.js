/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";

export default function ImageModal({ images }) {
  const [index, setIndex] = useState(0);
  const [displayModal, setDisplayModal] = useState(false);
  const next = () => {
    setIndex((i) => (i + 1) % images.length);
  };
  const prev = () => {
    setIndex(
      (i) => (((i - 1) % images.length) + images.length) % images.length
    );
  };
  const onClickOutside = (e) => {
    if (e.target.localName !== "button") {
      setDisplayModal(false);
    }
  };
  useEffect(() => {
    window.addEventListener("click", onClickOutside);
    return () => window.removeEventListener("click", onClickOutside);
  }, []);
  return (
    <div className="App">
      {!displayModal ? (
        <button onClick={() => setDisplayModal(true)}>open modal</button>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            color: "#5000ca",
            fontWeight: "bold",
          }}
        >
          <div>click left right to view all images</div>
          <div>click anywhere to close image</div>
        </div>
      )}

      {displayModal && (
        <div
          style={{
            border: "black 1px silver",
            backgroundColor: "white",
          }}
        >
          <button onClick={prev}>&lt;</button>
          <img src={images[index]} alt="" style={{ width: 360 }} />
          <button onClick={next}>&gt;</button>
        </div>
      )}
    </div>
  );
}
