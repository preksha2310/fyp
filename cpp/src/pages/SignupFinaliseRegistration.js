import { useCallback } from "react";
import DermaFine from "../components/DermaFine";
import { useNavigate } from "react-router-dom";
import styles from "./SignupFinaliseRegistration.module.css";

const SignupFinaliseRegistration = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/defaulr");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/1-login");
  }, [navigate]);

  return (
    <div className={styles.signupFinaliseRegistration}>
      <div className={styles.signupFinaliseRegistrationChild} />
      <div className={styles.inputFrame}>
        <div className={styles.textFieldParent}>
          <form className={styles.textField}>
            <div className={styles.dermafineWrapper}>
              <DermaFine
                fWidth="unset"
                fPadding="0px var(--padding-xl) 0px 0px"
                ineDisplay="inline-block"
              />
            </div>
            <div className={styles.plantsContainer}>
              <div className={styles.typographyWrapper}>
                <div className={styles.typography}>
                  <h3 className={styles.h6}>Set your password</h3>
                </div>
              </div>
              <div className={styles.textfieldoutlined}>
                <div className={styles.input}>
                  <div className={styles.labelContainer}>
                    <div className={styles.label}>Confirm password</div>
                  </div>
                  <input
                    className={styles.active}
                    placeholder="Set password "
                    type="password"
                  />
                </div>
              </div>
              <div className={styles.textfieldoutlined1}>
                <div className={styles.input1}>
                  <div className={styles.labelContainer1}>
                    <div className={styles.label1}>Confirm password</div>
                  </div>
                  <input
                    className={styles.active1}
                    placeholder="Confirm Password"
                    type="password"
                  />
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
            </div>
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
          <div className={styles.frameChild} />
          <div className={styles.termsandconditionsprivacypolic}>
            <div className={styles.chartsframe}>
              <div className={styles.termsAndConditions}>
                Terms and conditions
              </div>
              <div className={styles.privacyPolicy}>Privacy policy</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.framechartsamico}>
        <div className={styles.chartsamico}>
          <img
            className={styles.chartsIcon}
            loading="eager"
            alt=""
            src="/charts.svg"
          />
          <img
            className={styles.speechBubblesIcon}
            loading="eager"
            alt=""
            src="/speechbubbles.svg"
          />
          <img className={styles.plantsIcon} alt="" src="/plants.svg" />
        </div>
      </div>
    </div>
  );
};

export default SignupFinaliseRegistration;
