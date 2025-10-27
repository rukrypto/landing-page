import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <div className={`${styles.footer} ${styles.footer__container}`}>
      <div className={`${styles.footer__wrapper}`}>
        <img src="./assets/images/footer.svg" alt="" />
      </div>
    </div>
  );
};
export default Footer;
