import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Default from "./Property1Default";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/1-login");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/2-signup");
  }, [navigate]);

  return (
    <header className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className={styles.propertyDefaultComponent}>
          <Property1Default
            buttonText="Log In"
            showButton
            showTextContainer
            buttonVisible
            onButtonContainerClick={onButtonContainerClick}
            onButtonClick={onButtonClick}
          />
        </div>
      </div>
    </header>
  );
};

export default FrameComponent;
