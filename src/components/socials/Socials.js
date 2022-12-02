import twitter from "../../images/socials/twitter.png";
import watzp from "../../images/socials/watzp.png";
import facebook from "../../images/socials/facebook.png";
import mail from "../../images/socials/mail.png";

import styles from "./socials.module.css";

const Socials = () => {
  return (
    <div className={styles.moreInfo__socials}>
      <p className={styles.moreInfo__share}>Share</p>
      <a href="https://twitter.com/" target="__blank">
        <img className={styles.moreInfo__img} src={twitter} alt="twitter" />
      </a>
      <a href="https://www.whatsapp.com/" target="__blank">
        <img className={styles.moreInfo__img} src={watzp} alt="watzp" />
      </a>
      <a href="https://www.facebook.com/" target="__blank">
        <img className={styles.moreInfo__img} src={facebook} alt="facebook" />
      </a>
      <a href="https://mail.google.com/" target="__blank">
        <img className={styles.moreInfo__img} src={mail} alt="mail" />
      </a>
    </div>
  );
};
export default Socials;
