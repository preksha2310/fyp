import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Default from "./Property1Default";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onDermaFineTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/1-login");
  }, [navigate]);

  const onButtonContainer1Click = useCallback(() => {
    navigate("/2-signup");
  }, [navigate]);

  return (
    <header className={styles.headerParent}>
      <Property1Default
        buttonText="Aniket Joshua"
        showButton={false}
        showTextContainer={false}
        buttonVisible={false}
        ermaHeight="unset"
        ermaFlex="1"
        fWidth="unset"
        badgeFlex="unset"
        badgeOverflowX="unset"
        buttonTextAlignSelf="stretch"
        iconJamIconsOutlineLHeight="48px"
        iconJamIconsOutlineLWidth="95px"
        badgeMinHeight="unset"
        textBorder="unset"
        textPadding="0px var(--padding-base)"
        textBackgroundColor="unset"
        textAlignSelf="stretch"
        buttonAlignSelf="stretch"
        buttonDisplay="inline-block"
        iconJamIconsOutlineLMinHeight="unset"
        iconJamIconsOutlineLFlex="unset"
        iconJamIconsOutlineLAlignSelf="stretch"
        propPadding="0px var(--padding-base)"
        propAlignSelf="stretch"
        propAlignSelf1="stretch"
        propDisplay="inline-block"
        onDermaFineTextClick={onDermaFineTextClick}
        onButtonContainerClick={onButtonContainerClick}
        onButtonClick={onButtonContainer1Click}
      />
      <h1 className={styles.name}>Name</h1>
    </header>
  );
};

export default FrameComponent1;
