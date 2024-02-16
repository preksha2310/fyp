import ScreenDesktop2 from "./ScreenDesktop2";
import styles from "./Section3.module.css";

const Section3 = () => {
  return (
    <div className={styles.section}>
      <img className={styles.wavesIcon} alt="" src="/waves@2x.png" />
      <div className={styles.row}>
        <div className={styles.col}>
          <button className={styles.button}>
            <img
              className={styles.iconJamIconsOutlineL}
              alt=""
              src="/icon--jamicons--outline--logos--search.svg"
            />
            <div className={styles.textContainer}>
              <div className={styles.whatWeCan}>What we can detect</div>
            </div>
            <img
              className={styles.iconJamIconsOutlineL1}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright-121.svg"
            />
          </button>
          <div className={styles.button1}>
            <div className={styles.textContainer1}>
              <div className={styles.acne}>Acne</div>
            </div>
            <img
              className={styles.iconJamIconsOutlineL2}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright1.svg"
            />
          </div>
          <div className={styles.button2}>
            <div className={styles.textContainer2}>
              <div className={styles.vitiligo}>Vitiligo</div>
            </div>
            <img
              className={styles.iconJamIconsOutlineL3}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright1.svg"
            />
          </div>
          <div className={styles.button3}>
            <div className={styles.textContainer3}>
              <div className={styles.buttonText}>Python</div>
            </div>
            <img
              className={styles.iconJamIconsOutlineL4}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright1.svg"
            />
          </div>
          <div className={styles.button4}>
            <div className={styles.textContainer4}>
              <div className={styles.buttonText1}>Pandas</div>
            </div>
            <img
              className={styles.iconJamIconsOutlineL5}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright1.svg"
            />
          </div>
          <div className={styles.button5}>
            <div className={styles.textContainer5}>
              <div className={styles.buttonText2}>Node js</div>
            </div>
            <img
              className={styles.iconJamIconsOutlineL6}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright1.svg"
            />
          </div>
        </div>
        <div className={styles.col1}>
          <ScreenDesktop2 picture="/picture4@2x.png" />
          <ScreenDesktop2
            picture="/picture-1@2x.png"
            propMargin="0 !important"
            propPosition="absolute"
            propTop="105px"
            propLeft="94px"
          />
          <div className={styles.wrapperPicture}>
            <img
              className={styles.pictureIcon}
              alt=""
              src="/picture-2@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
