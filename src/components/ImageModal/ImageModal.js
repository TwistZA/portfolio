/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
// const images = [
//   "https://images.dog.ceo/breeds/pomeranian/n02112018_5091.jpg",
//   "https://images.dog.ceo/breeds/mountain-swiss/n02107574_753.jpg",
//   "https://images.dog.ceo/breeds/leonberg/n02111129_3028.jpg",
// ];

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
      <button onClick={() => setDisplayModal(true)}>open modal</button>
      {displayModal && (
        <div
          style={{
            border: "black 1px silver",
            backgroundColor: "white",
          }}
        >
          <button onClick={prev}>&lt;</button>
          <img src={images[index]} alt="" style={{ width: 320 }} />
          <button onClick={next}>&gt;</button>
        </div>
      )}
    </div>
  );
}
