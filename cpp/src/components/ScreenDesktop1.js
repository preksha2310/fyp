import { useMemo } from "react";
import styles from "./ScreenDesktop1.module.css";

const ScreenDesktop1 = ({
  feature,
  desktopAppPlaceholder1,
  propAlignSelf,
  propWidth,
  propFlexWrap,
  propOverflowX,
  propMinWidth,
  propMinWidth1,
  propWidth1,
  propRight,
  propHeight,
}) => {
  const screenDesktopStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const topBarStyle = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  const circlesStyle = useMemo(() => {
    return {
      overflowX: propOverflowX,
      minWidth: propMinWidth,
    };
  }, [propOverflowX, propMinWidth]);

  const arrowsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const addressBarStyle = useMemo(() => {
    return {
      width: propWidth1,
      right: propRight,
    };
  }, [propWidth1, propRight]);

  const desktopAppPlaceholder1IconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={styles.screendesktop} style={screenDesktopStyle}>
      <div className={styles.topBar} style={topBarStyle}>
        <div className={styles.circles} style={circlesStyle}>
          <img
            className={styles.iconJamIconsFilledCi}
            loading="eager"
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
        <div className={styles.arrows} style={arrowsStyle}>
          <img
            className={styles.iconJamIconsOutlineL}
            loading="eager"
            alt=""
            src="/icon--jamicons--outline--logos--chevronleft.svg"
          />
          <img
            className={styles.iconJamIconsOutlineL1}
            loading="eager"
            alt=""
            src="/icon--jamicons--outline--logos--chevronright.svg"
          />
        </div>
        <button className={styles.addressBar} style={addressBarStyle}>
          <div className={styles.feature}>{feature}</div>
        </button>
      </div>
      <img
        className={styles.desktopAppPlaceholder1Icon}
        loading="eager"
        alt=""
        src={desktopAppPlaceholder1}
        style={desktopAppPlaceholder1IconStyle}
      />
    </div>
  );
};

export default ScreenDesktop1;
