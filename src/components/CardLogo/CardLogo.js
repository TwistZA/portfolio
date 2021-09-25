/* eslint-disable @next/next/no-img-element */
import styles from "./CardLogo.module.css";

export default function CardLogo({
  cardTitle,
  imageCover,
  imageLogo,
  waveColor,
  bodyText,
}) {
  return (
    <div className={styles.card}>
      <img className={styles.coverImage} src={imageCover} alt="logo"></img>
      <div className={styles.svgImage}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={waveColor}
            fillOpacity="0.9"
            d="M0,128L720,288L1440,320L1440,0L720,0L0,0Z"
          ></path>
        </svg>
      </div>
      <img className={styles.logoImage} src={imageLogo} alt="logo"></img>

      <div className={styles.body}>
        <div className={styles.title}>{cardTitle}</div>
        <div className={styles.mainText}>{bodyText}</div>
      </div>

      <div className={styles.svgImage}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={waveColor}
            fillOpacity="0.9"
            d="M0,128L720,288L1440,320L1440,320L720,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
