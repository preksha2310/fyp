import styles from "./LoadingPage.module.css";

const LoadingPage = () => {
  return (
    <div className={styles.loadingPage}>
      <div className={styles.loading}>
        <div className={styles.gradients}>
          <div className={styles.frameContainer} />
        </div>
        <div className={styles.lightFrame}>
          <div className={styles.light}>
            <div className={styles.rectangleInstance} />
          </div>
          <div className={styles.light1}>
            <div className={styles.framedDualRectangles} />
            <div className={styles.framedDualRectangles1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
