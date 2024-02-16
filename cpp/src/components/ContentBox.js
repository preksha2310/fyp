import { useMemo } from "react";
import styles from "./ContentBox.module.css";

const ContentBox = ({
  iconIoniconsFilledAttach,
  title,
  paragraph,
  propBackgroundColor,
}) => {
  const iconStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div className={styles.contentBox}>
      <img className={styles.pictureIcon} alt="" src="/picture5@2x.png" />
      <div className={styles.content}>
        <button className={styles.icon} style={iconStyle}>
          <img
            className={styles.iconIoniconsFilledAtt}
            alt=""
            src={iconIoniconsFilledAttach}
          />
        </button>
        <div className={styles.titleCategory}>
          <div className={styles.category}>Category</div>
          <div className={styles.titleContainer}>
            <h3 className={styles.title}>{title}</h3>
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
        <img className={styles.pictureIcon1} alt="" src="/picture5@2x.png" />
        <div className={styles.paragraph}>{paragraph}</div>
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
  );
};

export default ContentBox;
