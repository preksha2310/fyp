import ContentBox from "./ContentBox";
import styles from "./Section1.module.css";

const Section1 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <ContentBox
          iconIoniconsFilledAttach="/icon--ionicons--filled--attach.svg"
          title="Diagnose"
          paragraph="Precision diagnostics for diverse skin issues."
        />
        <ContentBox
          iconIoniconsFilledAttach="/icon--ionicons--filled--pulse.svg"
          title="Educate"
          paragraph="Empowering through skincare knowledge."
          propBackgroundColor="#cffafe"
        />
        <div className={styles.contentBox}>
          <img className={styles.pictureIcon} alt="" src="/picture5@2x.png" />
          <div className={styles.content}>
            <div className={styles.icon}>
              <img
                className={styles.iconIoniconsFilledPie}
                loading="eager"
                alt=""
                src="/icon--ionicons--filled--piechart.svg"
              />
            </div>
            <div className={styles.titleCategory}>
              <div className={styles.category}>Category</div>
              <div className={styles.titleContainer}>
                <h3 className={styles.title}>Personalize</h3>
                <div className={styles.badge}>
                  <img
                    className={styles.iconJamIconsOutlineL}
                    alt=""
                    src="/icon--jamicons--outline--logos--circle1.svg"
                  />
                  <div className={styles.textContainer}>
                    <div className={styles.buttonText}>+2,5%</div>
                  </div>
                  <img
                    className={styles.iconIconoirStatUp}
                    alt=""
                    src="/icon--iconoir--statup.svg"
                  />
                </div>
                <img
                  className={styles.iconJamIconsOutlineL1}
                  alt=""
                  src="/icon--jamicons--outline--logos--pencil.svg"
                />
              </div>
            </div>
            <img
              className={styles.pictureIcon1}
              alt=""
              src="/picture5@2x.png"
            />
            <div className={styles.paragraph}>
              Customized skincare for your unique needs.
            </div>
            <div className={styles.userCard}>
              <img
                className={styles.userThumbIcon}
                alt=""
                src="/user-thumb3@2x.png"
              />
              <div className={styles.details}>
                <div className={styles.category1}>Ralph Edwards</div>
                <div className={styles.category2}>{`Harvesting 32KWh `}</div>
              </div>
            </div>
          </div>
          <div className={styles.buttonsGroup}>
            <div className={styles.button}>
              <img
                className={styles.iconJamIconsOutlineL2}
                alt=""
                src="/icon--jamicons--outline--logos--plus1.svg"
              />
              <div className={styles.textContainer1}>
                <div className={styles.buttonText1}>Button Text</div>
              </div>
              <img
                className={styles.iconJamIconsOutlineL3}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright1.svg"
              />
            </div>
            <div className={styles.button1}>
              <img
                className={styles.iconJamIconsOutlineL4}
                alt=""
                src="/icon--jamicons--outline--logos--plus.svg"
              />
              <div className={styles.textContainer2}>
                <div className={styles.buttonText2}>Button Text</div>
              </div>
              <img
                className={styles.iconJamIconsOutlineL5}
                alt=""
                src="/icon--jamicons--outline--logos--arrowright.svg"
              />
            </div>
          </div>
          <div className={styles.badge1}>
            <img
              className={styles.iconJamIconsOutlineL6}
              alt=""
              src="/icon--jamicons--outline--logos--circle2.svg"
            />
            <div className={styles.textContainer3}>
              <div className={styles.buttonText3}>Featured</div>
            </div>
            <img
              className={styles.iconIconoirCancel}
              alt=""
              src="/icon--iconoir--cancel1.svg"
            />
          </div>
          <img
            className={styles.userThumbIcon1}
            alt=""
            src="/user-thumb11@2x.png"
          />
        </div>
        <ContentBox
          iconIoniconsFilledAttach="/icon--ionicons--filled--aperture.svg"
          title="Connect"
          paragraph="Connecting for skin wellness."
          propBackgroundColor="#ede9fe"
        />
      </div>
    </section>
  );
};

export default Section1;
