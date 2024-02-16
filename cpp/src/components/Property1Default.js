import { useMemo } from "react";
import styles from "./Property1Default.module.css";

const Property1Default = ({
  buttonText,
  showButton,
  showTextContainer,
  buttonVisible,
  ermaHeight,
  ermaFlex,
  fWidth,
  badgeFlex,
  badgeOverflowX,
  buttonTextAlignSelf,
  iconJamIconsOutlineLHeight,
  iconJamIconsOutlineLWidth,
  badgeMinHeight,
  textBorder,
  textPadding,
  textBackgroundColor,
  textAlignSelf,
  buttonAlignSelf,
  buttonDisplay,
  iconJamIconsOutlineLMinHeight,
  iconJamIconsOutlineLFlex,
  iconJamIconsOutlineLAlignSelf,
  propPadding,
  propAlignSelf,
  propAlignSelf1,
  propDisplay,
  onDermaFineTextClick,
  onButtonContainerClick,
  onButtonClick,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      height: ermaHeight,
      flex: ermaFlex,
    };
  }, [ermaHeight, ermaFlex]);

  const leftStyle = useMemo(() => {
    return {
      width: fWidth,
    };
  }, [fWidth]);

  const buttonsGroupStyle = useMemo(() => {
    return {
      flex: badgeFlex,
      overflowX: badgeOverflowX,
    };
  }, [badgeFlex, badgeOverflowX]);

  const buttonsGroup1Style = useMemo(() => {
    return {
      alignSelf: buttonTextAlignSelf,
    };
  }, [buttonTextAlignSelf]);

  const buttonStyle = useMemo(() => {
    return {
      height: iconJamIconsOutlineLHeight,
      width: iconJamIconsOutlineLWidth,
    };
  }, [iconJamIconsOutlineLHeight, iconJamIconsOutlineLWidth]);

  const iconJamIconsOutlineLStyle = useMemo(() => {
    return {
      minHeight: badgeMinHeight,
    };
  }, [badgeMinHeight]);

  const textContainerStyle = useMemo(() => {
    return {
      border: textBorder,
      padding: textPadding,
      backgroundColor: textBackgroundColor,
      alignSelf: textAlignSelf,
    };
  }, [textBorder, textPadding, textBackgroundColor, textAlignSelf]);

  const buttonTextStyle = useMemo(() => {
    return {
      alignSelf: buttonAlignSelf,
      display: buttonDisplay,
    };
  }, [buttonAlignSelf, buttonDisplay]);

  const iconJamIconsOutlineL1Style = useMemo(() => {
    return {
      minHeight: iconJamIconsOutlineLMinHeight,
    };
  }, [iconJamIconsOutlineLMinHeight]);

  const button1Style = useMemo(() => {
    return {
      flex: iconJamIconsOutlineLFlex,
      alignSelf: iconJamIconsOutlineLAlignSelf,
    };
  }, [iconJamIconsOutlineLFlex, iconJamIconsOutlineLAlignSelf]);

  const textContainer1Style = useMemo(() => {
    return {
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propPadding, propAlignSelf]);

  const buttonText1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      display: propDisplay,
    };
  }, [propAlignSelf1, propDisplay]);

  return (
    <div className={styles.property1default} style={property1DefaultStyle}>
      <div className={styles.left} style={leftStyle}>
        <h1 className={styles.dermafine} onClick={onDermaFineTextClick}>
          <span>D</span>
          <span className={styles.erma}>erma</span>
          <span>F</span>
          <span className={styles.ine}>ine</span>
        </h1>
        <div className={styles.buttonsGroup} style={buttonsGroupStyle}>
          <div className={styles.menuItem}>
            <img
              className={styles.iconJamIconsOutlineL}
              alt=""
              src="/icon--jamicons--outline--logos--home.svg"
            />
            <div className={styles.menuItem1}>How It Works</div>
            <div className={styles.badge}>
              <img
                className={styles.iconJamIconsOutlineL1}
                alt=""
                src="/icon--jamicons--outline--logos--circle.svg"
              />
              <div className={styles.textContainer}>
                <div className={styles.buttonText}>99+</div>
              </div>
              <img
                className={styles.iconIconoirCancel}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL2}
              alt=""
              src="/icon--jamicons--outline--logos--chevrondown.svg"
            />
          </div>
          <div className={styles.menuItem2}>
            <img
              className={styles.iconJamIconsOutlineL3}
              alt=""
              src="/icon--jamicons--outline--logos--home.svg"
            />
            <div className={styles.menuItem3}>Solutions</div>
            <div className={styles.badge1}>
              <img
                className={styles.iconJamIconsOutlineL4}
                alt=""
                src="/icon--jamicons--outline--logos--circle.svg"
              />
              <div className={styles.textContainer1}>
                <div className={styles.buttonText1}>99+</div>
              </div>
              <img
                className={styles.iconIconoirCancel1}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL5}
              alt=""
              src="/icon--jamicons--outline--logos--chevrondown.svg"
            />
          </div>
          <div className={styles.menuItem4}>
            <img
              className={styles.iconJamIconsOutlineL6}
              alt=""
              src="/icon--jamicons--outline--logos--home.svg"
            />
            <div className={styles.menuItem5}>Test</div>
            <div className={styles.badge2}>
              <img
                className={styles.iconJamIconsOutlineL7}
                alt=""
                src="/icon--jamicons--outline--logos--circle.svg"
              />
              <div className={styles.textContainer2}>
                <div className={styles.buttonText2}>99+</div>
              </div>
              <img
                className={styles.iconIconoirCancel2}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL8}
              alt=""
              src="/icon--jamicons--outline--logos--chevrondown.svg"
            />
          </div>
          <div className={styles.menuItem6}>
            <img
              className={styles.iconJamIconsOutlineL9}
              alt=""
              src="/icon--jamicons--outline--logos--home.svg"
            />
            <div className={styles.menuItem7} />
            <div className={styles.badge3}>
              <img
                className={styles.iconJamIconsOutlineL10}
                alt=""
                src="/icon--jamicons--outline--logos--circle.svg"
              />
              <div className={styles.textContainer3}>
                <div className={styles.buttonText3}>99+</div>
              </div>
              <img
                className={styles.iconIconoirCancel3}
                alt=""
                src="/icon--iconoir--cancel.svg"
              />
            </div>
            <img
              className={styles.iconJamIconsOutlineL11}
              alt=""
              src="/icon--jamicons--outline--logos--chevrondown.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.buttonsGroup1} style={buttonsGroup1Style}>
        {showButton && (
          <div
            className={styles.button}
            onClick={onButtonContainerClick}
            style={buttonStyle}
          >
            <img
              className={styles.iconJamIconsOutlineL12}
              alt=""
              src="/icon--jamicons--outline--logos--plus.svg"
              style={iconJamIconsOutlineLStyle}
            />
            {showTextContainer && (
              <button
                className={styles.textContainer4}
                style={textContainerStyle}
              >
                <div className={styles.buttonText4} style={buttonTextStyle}>
                  {buttonText}
                </div>
              </button>
            )}
            <img
              className={styles.iconJamIconsOutlineL13}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright.svg"
              style={iconJamIconsOutlineL1Style}
            />
            <div className={styles.badge4}>
              <div className={styles.text}>9</div>
            </div>
          </div>
        )}
        {buttonVisible && (
          <button
            className={styles.button1}
            onClick={onButtonClick}
            style={button1Style}
          >
            <img
              className={styles.iconJamIconsOutlineL14}
              alt=""
              src="/icon--jamicons--outline--logos--plus1.svg"
            />
            <div className={styles.textContainer5} style={textContainer1Style}>
              <div className={styles.buttonText5} style={buttonText1Style}>
                Sign Up
              </div>
            </div>
            <img
              className={styles.iconJamIconsOutlineL15}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright1.svg"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Property1Default;
