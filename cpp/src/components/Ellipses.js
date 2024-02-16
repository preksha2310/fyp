import styles from "./Ellipses.module.css";

const Ellipses = () => {
  return (
    <div className={styles.ellipses}>
      <div className={styles.usercard} />
      <div className={styles.userThumb} />
      <div className={styles.details} />
      <img
        className={styles.ellipsesChild}
        loading="eager"
        alt=""
        src="/ellipse-23.svg"
      />
      <div className={styles.sectionText} />
      <div className={styles.top} />
    </div>
  );
};

export default Ellipses;
