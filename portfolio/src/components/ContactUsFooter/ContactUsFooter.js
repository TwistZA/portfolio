import styles from "./ContactUsFooter.module.css";
export default function ContactUsFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <img src="/facebook.png"></img>
        <img src="/twitter.png"></img>
        <img src="/gmail.png"></img>
        <img src="/whatsapp.png"></img>
        <img src="/skype.png"></img>
        <img src="/teams.png"></img>
      </div>
    </div>
  );
}
