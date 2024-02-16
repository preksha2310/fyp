import styles from "./What.module.css";

const What = () => {
  return (
    <div className={styles.what}>
      <div className={styles.skinDiseaseFrame}>
        <div className={styles.diseaseName}>
          <h1 className={styles.nameOfThe}>Name of the Skin Disease</h1>
          <h3 className={styles.smallInfoAboutContainer}>
            <p className={styles.smallInfoAbout}>
              Small Info about the disease
            </p>
            <p className={styles.loremIpsumDolor}>
              Lorem ipsum dolor sit amet. Cum repudiandae voluptas aut maxime
              cupiditate et fugit dolor aut molestiae aliquid eos quae
              consequatur et voluptatem autem. Qui possimus iusto eum ducimus
              impedit et beatae nihil in rerum voluptas quo asperiores ratione.
            </p>
          </h3>
        </div>
      </div>
      <div className={styles.decorativeFrame}>
        <div className={styles.emptyDecoration}>
          <img
            className={styles.decorationIcon}
            loading="eager"
            alt=""
            src="/decoration.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default What;
