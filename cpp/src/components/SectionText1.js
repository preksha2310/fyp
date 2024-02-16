import styles from "./SectionText1.module.css";

const SectionText1 = () => {
  return (
    <div className={styles.sectionText}>
      <div className={styles.top}>
        <b className={styles.caption}>Caption</b>
        <div className={styles.mainHeadline}>What they say about us</div>
        <h1 className={styles.secondaryHeadline}>{`Objectives `}</h1>
      </div>
      <div className={styles.paragraph}>
        <p className={styles.enimNequeMassa}>
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus.
        </p>
        <p className={styles.necMagnaSed}>
          Nec magna sed interdum sit purus tellus. Et volutpat proin neque
          placerat at bibendum quam tellus.
        </p>
      </div>
      <div className={styles.buttonsGroup}>
        <div className={styles.button}>
          <img
            className={styles.iconJamIconsOutlineL}
            alt=""
            src="/icon--jamicons--outline--logos--plus.svg"
          />
          <div className={styles.textContainer}>
            <div className={styles.buttonText}>Sign up now</div>
          </div>
          <img
            className={styles.iconJamIconsOutlineL1}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright.svg"
          />
        </div>
        <div className={styles.button2}>
          <img
            className={styles.iconJamIconsOutlineL2}
            alt=""
            src="/icon--jamicons--outline--logos--plus.svg"
          />
          <div className={styles.textContainer1}>
            <div className={styles.buttonText1}>Button Text</div>
          </div>
          <img
            className={styles.iconJamIconsOutlineL3}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright.svg"
          />
        </div>
        <div className={styles.button3}>
          <img
            className={styles.iconJamIconsOutlineL4}
            alt=""
            src="/icon--jamicons--outline--logos--playcircle.svg"
          />
          <div className={styles.textContainer2}>
            <div className={styles.buttonText2}>Watch Demo</div>
          </div>
          <img
            className={styles.iconJamIconsOutlineL5}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright.svg"
          />
          <div className={styles.badge}>
            <div className={styles.text}>9</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionText1;
