import { useMemo } from "react";
import styles from "./ScreenDesktop2.module.css";

const ScreenDesktop2 = ({
  picture,
  propMargin,
  propPosition,
  propTop,
  propLeft,
}) => {
  const screenDesktop1Style = useMemo(() => {
    return {
      margin: propMargin,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propMargin, propPosition, propTop, propLeft]);

  return (
    <div className={styles.screendesktop} style={screenDesktop1Style}>
      <div className={styles.topBar}>
        <div className={styles.circles}>
          <img
            className={styles.iconJamIconsFilledCi}
            alt=""
            src="/icon--jamicons--filled--circlef.svg"
          />
          <img
            className={styles.iconJamIconsFilledCi1}
            alt=""
            src="/icon--jamicons--filled--circlef-1.svg"
          />
          <img
            className={styles.iconJamIconsFilledCi2}
            alt=""
            src="/icon--jamicons--filled--circlef-2.svg"
          />
        </div>
        <div className={styles.arrows}>
          <img
            className={styles.iconJamIconsOutlineL}
            alt=""
            src="/icon--jamicons--outline--logos--chevronleft-1.svg"
          />
          <img
            className={styles.iconJamIconsOutlineL1}
            alt=""
            src="/icon--jamicons--outline--logos--chevronright-1.svg"
          />
        </div>
        <div className={styles.addressBar}>
          <div className={styles.feature}>feature</div>
        </div>
      </div>
      <div className={styles.wrapperPicture}>
        <img className={styles.pictureIcon} alt="" src={picture} />
      </div>
    </div>
  );
};

export default ScreenDesktop2;
