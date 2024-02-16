import { useCallback } from "react";
import DermaFine from "../components/DermaFine";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/defaulr");
  }, [navigate]);

  const onForgotYourPasswordClick = useCallback(() => {
    navigate("/3-forget-password");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/2-signup");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <div className={styles.frameLoginFormWrapper}>
        <div className={styles.frameLoginForm}>
          <div className={styles.dermaFineLabel}>
            <DermaFine />
            <form className={styles.frameButton}>
              <div className={styles.loginForm}>
                <div className={styles.typography}>
                  <h3 className={styles.h6}>Sign in</h3>
                </div>
                <div className={styles.textfieldoutlined}>
                  <div className={styles.input}>
                    <input
                      className={styles.inactive}
                      placeholder="Email Address *"
                      type="email"
                    />
                  </div>
                </div>
                <div className={styles.textfieldoutlined1}>
                  <div className={styles.input1}>
                    <input
                      className={styles.inactive1}
                      placeholder="Password *"
                      type="password"
                    />
                  </div>
                </div>
                <div className={styles.button} onClick={onButtonContainerClick}>
                  <div className={styles.unstyledbutton}>
                    <button className={styles.content}>
                      <div className={styles.button1}>Login</div>
                      <img
                        className={styles.maskedIcon}
                        alt=""
                        src="/masked-icon.svg"
                      />
                    </button>
                  </div>
                </div>
                <div
                  className={styles.forgotYourPassword}
                  onClick={onForgotYourPasswordClick}
                >
                  Forgot your password?
                </div>
              </div>
              <button className={styles.button2} onClick={onButtonClick}>
                <div className={styles.unstyledbutton1}>
                  <div className={styles.content1}>
                    <div className={styles.button3}>create new account</div>
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
          <div className={styles.circleShape} />
          <div className={styles.chartsFrame}>
            <div className={styles.speechBubbles}>
              <div className={styles.termsAndConditions}>
                Terms and conditions
              </div>
              <div className={styles.privacyPolicy}>Privacy policy</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.logoFrame}>
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

export default Login;
