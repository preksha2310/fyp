import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SectionText.module.css";

const SectionText = () => {
  const navigate = useNavigate();

  const onButtonsGroupClick = useCallback(() => {
    navigate("/2-signup");
  }, [navigate]);

  return (
    <div className={styles.sectionText}>
      <div className={styles.top}>
        <b className={styles.caption}>Caption</b>
        <h1 className={styles.mainHeadline}>Dermatology for the Digital Age</h1>
        <div className={styles.secondaryHeadline}>Headline Two</div>
      </div>
      <div className={styles.paragraph}>
        Seamless Skin Diagnostics, Anytime, Anywhere
      </div>
      <button className={styles.buttonsGroup} onClick={onButtonsGroupClick}>
        <div className={styles.button}>
          <img
            className={styles.iconJamIconsOutlineL}
            alt=""
            src="/icon--jamicons--outline--logos--plus1.svg"
          />
          <div className={styles.textContainer}>
            <div className={styles.buttonText}>Start For Free</div>
          </div>
          <img
            className={styles.iconJamIconsOutlineL1}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright1.svg"
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
          <div className={styles.badge}>
            <div className={styles.text}>9</div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default SectionText;
