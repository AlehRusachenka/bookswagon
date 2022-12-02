import Socials from "../socials/Socials";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footer__wrapper}>
            <div className={styles.footer__block}>
              <p className={styles.footer__item}>New Books</p>
              <p className={styles.footer__item}>Merchandise</p>
              <p className={styles.footer__item}>Book Bundle</p>
              <p className={styles.footer__item}>Curated Libraries</p>
            </div>
            <div className={styles.footer__block}>
              <h3 className={styles.footer__block_title}>Contact Us:</h3>
              <address className={styles.footer__block_address}>
                453 S Spring St – Ground Floor Los Angeles, CA 90013
              </address>
              <h5 className={styles.footer__block_whours}>
                Hours: 11AM - 8PM{" "}
              </h5>
              <div className={styles.footer__block_contacts}>
                <a
                  href="tel:213-488-0599"
                  className={styles.footer__block_link}
                >
                  <span className={styles.footer__block_tel}>
                    Main phone: 213-488-0599
                  </span>
                </a>
                <a
                  href="tel: 213-628-3499"
                  className={styles.footer__block_link}
                >
                  <span className={styles.footer__block_tel}>
                    Annex Phone: 213-628-3499
                  </span>
                </a>
                <a
                  href="mailto:bookswagon.support@gmail.com"
                  className={styles.footer__block_link}
                >
                  <span className={styles.footer__block_email}>
                    bookswagon.support@gmail.com
                  </span>
                </a>
              </div>
            </div>
            <div className={styles.footer__block}>
              <h5 className={styles.footer__block_title}>
                Question? Click one of the links below to direct your email to
                the right place:
              </h5>
              <div className={styles.footer__block_contacts}>
                <a href="#" className={styles.footer__block_link}>
                  General info
                </a>
                <a href="#" className={styles.footer__block_link}>
                  Events
                </a>
                <a href="#" className={styles.footer__block_link}>
                  Curated Bundle
                </a>
                <a href="#" className={styles.footer__block_link}>
                  Filming or commercial photography
                </a>
                <a href="#" className={styles.footer__block_link}>
                  Online orders
                </a>
              </div>
            </div>
          </div>
          <p className={styles.footer__copyright}>
            All rights are reserved &copy;
          </p>
          <Socials />
        </div>
      </footer>
    </>
  );
};
export default Footer;
