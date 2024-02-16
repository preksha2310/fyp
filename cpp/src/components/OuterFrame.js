import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./OuterFrame.module.css";

const OuterFrame = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/23-signup-finalise-registration");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/1-login");
  }, [navigate]);

  return (
    <div className={styles.outerFrame}>
      <div className={styles.buttonGroup}>
        <form className={styles.buttonNest}>
          <div className={styles.firstAndLastName}>
            <div className={styles.textfieldoutlined}>
              <div className={styles.input}>
                <input
                  className={styles.inactive}
                  placeholder="First name"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.textfieldoutlined1}>
              <div className={styles.input1}>
                <input
                  className={styles.inactive1}
                  placeholder="Last name"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className={styles.textfieldoutlined2}>
            <div className={styles.input2}>
              <div className={styles.labelContainer}>
                <div className={styles.label}>Email Address</div>
              </div>
              <input
                className={styles.active}
                placeholder="Email"
                type="email"
              />
            </div>
          </div>
          <div className={styles.textfieldoutlinedWrapper}>
            <div className={styles.textfieldoutlined3}>
              <div className={styles.input3}>
                <div className={styles.labelContainer1}>
                  <div className={styles.label1} />
                </div>
                <input
                  className={styles.active1}
                  placeholder="Phone Number"
                  type="number"
                />
              </div>
            </div>
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <div className={styles.unstyledbutton}>
              <div className={styles.content}>
                <div className={styles.button1}>Sign up</div>
                <img
                  className={styles.maskedIcon}
                  alt=""
                  src="/masked-icon1.svg"
                />
              </div>
            </div>
          </button>
          <button className={styles.button2} onClick={onButton1Click}>
            <div className={styles.unstyledbutton1}>
              <div className={styles.content1}>
                <div className={styles.button3}>BACK to login</div>
                <img
                  className={styles.maskedIcon1}
                  alt=""
                  src="/masked-icon1.svg"
                />
              </div>
            </div>
          </button>
        </form>
      </div>
      <img
        className={styles.datacuateIcon}
        loading="eager"
        alt=""
        src="/datacuate.svg"
      />
    </div>
  );
};

export default OuterFrame;
