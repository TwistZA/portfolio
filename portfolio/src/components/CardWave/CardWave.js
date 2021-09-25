/* eslint-disable @next/next/no-img-element */
import styles from "./CardWave.module.css";

export default function CardWave({
  cardTitle,
  imageSrc,
  waveColor,
  list,
  link,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.svgImage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill={waveColor}
            fillOpacity="1"
            d="M0,288L30,256C60,224,120,160,180,149.3C240,139,300,181,360,208C420,235,480,245,540,224C600,203,660,149,720,117.3C780,85,840,75,900,69.3C960,64,1020,64,1080,80C1140,96,1200,128,1260,170.7C1320,213,1380,267,1410,293.3L1440,320L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>
      </div>
      <img src={imageSrc} alt="logo"></img>

      <div className={styles.caption}>{cardTitle}</div>
      <div className={styles.list}>
        <ul>
          {list &&
            list.map((item) => {
              return <li key={item}>{item}</li>;
            })}
        </ul>
      </div>
      <a href={link} className={styles.myButton}>
        view now
      </a>

      <div className={styles.svgImage}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={waveColor}
            fillOpacity="1"
            d="M0,288L30,256C60,224,120,160,180,149.3C240,139,300,181,360,208C420,235,480,245,540,224C600,203,660,149,720,117.3C780,85,840,75,900,69.3C960,64,1020,64,1080,80C1140,96,1200,128,1260,170.7C1320,213,1380,267,1410,293.3L1440,320L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
