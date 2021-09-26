/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import styles from "./ImageModal.module.css";

export default function ImageModal({ images, title }) {
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

  const handleClick = () => {
    setDisplayModal(true);
  };

  useEffect(() => {
    window.addEventListener("click", onClickOutside);
    return () => window.removeEventListener("click", onClickOutside);
  }, []);

  return (
    <div className="App">
      {!displayModal ? (
        <button className={styles.myButton} onClick={() => handleClick()}>
          show {title}
        </button>
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
            position: "relative",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -100%)",
            zIndex: "10",
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
              width: "80vw",
              border: "5px groove black",
              boxShadow:
                "  -5px 5px 10px #0f0f0f,              5px -5px 10px #ffffff",
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
