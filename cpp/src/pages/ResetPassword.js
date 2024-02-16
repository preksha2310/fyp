import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ResetPassword.module.css";

const ResetPassword = () => {
  const navigate = useNavigate();

  const onButton1Click = useCallback(() => {
    navigate("/1-login");
  }, [navigate]);

  return (
    <div className={styles.resetPassword}>
      <form className={styles.textFieldInstanceParent}>
        <div className={styles.textFieldInstance}>
          <div className={styles.dermafine}>
            <h1 className={styles.dermafine1}>
              <span className={styles.d}>D</span>
              <span className={styles.erma}>erma</span>
              <span className={styles.f}>F</span>
              <span className={styles.ine}>ine</span>
            </h1>
          </div>
          <div className={styles.typographyWrapper}>
            <div className={styles.typography}>
              <h3 className={styles.h6}>Reset your password</h3>
            </div>
          </div>
        </div>
        <div className={styles.typeInYour}>Type in your new password</div>
        <div className={styles.dermaFineLabel}>
          <div className={styles.textfieldoutlined}>
            <div className={styles.input}>
              <input
                className={styles.inactive}
                placeholder="New password *"
                type="password"
              />
            </div>
          </div>
          <div className={styles.loginForm}>
            <div className={styles.textfieldoutlined1}>
              <div className={styles.input1}>
                <input
                  className={styles.inactive1}
                  placeholder="Retry new password *"
                  type="password"
                />
              </div>
            </div>
            <button className={styles.button}>
              <div className={styles.unstyledbutton}>
                <div className={styles.content}>
                  <div className={styles.button1}>Reset</div>
                  <img
                    className={styles.maskedIcon}
                    alt=""
                    src="/masked-icon.svg"
                  />
                </div>
              </div>
            </button>
          </div>
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
      <div className={styles.termsConditionsPrivacyPolic} />
      <div className={styles.frameForTermsConditions}>
        <div className={styles.termsAndConditionsParent}>
          <div className={styles.termsAndConditions}>Terms and conditions</div>
          <div className={styles.privacyPolicy}>Privacy policy</div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
