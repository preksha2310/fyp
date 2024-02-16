import { useCallback } from "react";
import DermaFine from "../components/DermaFine";
import { useNavigate } from "react-router-dom";
import styles from "./ForgetPassword.module.css";

const ForgetPassword = () => {
  const navigate = useNavigate();

  const onButton1Click = useCallback(() => {
    navigate("/4-reset-password-email-message");
  }, [navigate]);

  return (
    <div className={styles.forgetPassword}>
      <div className={styles.dermaFineInstanceParent}>
        <div className={styles.dermaFineInstance}>
          <DermaFine
            fWidth="147px"
            fPadding="0px 0px"
            ineDisplay="inline-block"
          />
        </div>
        <div className={styles.textFieldOutlinedInstance}>
          <div className={styles.inactiveFrame}>
            <div className={styles.typeInYour}>
              Type in your registered email address to reset password
            </div>
            <div className={styles.typography}>
              <h3 className={styles.h6}>Reset your password</h3>
            </div>
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
        </div>
        <button className={styles.button}>
          <div className={styles.unstyledbutton}>
            <div className={styles.content}>
              <div className={styles.button1}>BACK to login</div>
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
              <div className={styles.button3}>Next</div>
              <img
                className={styles.maskedIcon1}
                alt=""
                src="/masked-icon.svg"
              />
            </div>
          </div>
        </button>
      </div>
      <div className={styles.shapeCircle} />
      <div className={styles.textfieldoutlined1}>
        <div className={styles.input1}>
          <div className={styles.inactive1}>
            <div className={styles.label}>Password *</div>
          </div>
        </div>
      </div>
      <div className={styles.frameFooter}>
        <div className={styles.termsConditionsFrame}>
          <div className={styles.termsAndConditions}>Terms and conditions</div>
          <div className={styles.privacyPolicy}>Privacy policy</div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
