/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import styles from "./ImageModal.module.css";

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
          <div>click anywhere else to close image</div>
        </div>
      )}

      {displayModal && (
        <div
          style={{
            border: "black 1px silver",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <button
            className={styles.modalButton}
            style={{
              width: "10%",
              fontWeight: "bold",
              fontSize: "2rem",
              color: "black",
              backgroundColor: "white",
              border: "none",
            }}
            onClick={prev}
          >
            &lt;
          </button>
          <img
            src={images[index]}
            alt=""
            style={{
              width: "70%",
            }}
          />
          <button
            className={styles.modalButton}
            style={{
              width: "10%",
              fontWeight: "bold",
              fontSize: "2rem",
              color: "black",
              backgroundColor: "white",
              border: "none",
            }}
            onClick={next}
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}
