/* eslint-disable @next/next/no-img-element */
import styles from "./ContactUsFooter.module.css";
export default function ContactUsFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img src="/facebook.png" alt="logo"></img>
        <img src="/twitter.png" alt="logo"></img>
        <img src="/gmail.png" alt="logo"></img>
        <img src="/whatsapp.png" alt="logo"></img>
        <img src="/skype.png" alt="logo"></img>
        <img src="/teams.png" alt="logo"></img>
      </div>
    </div>
  );
}
