import styles from "./ResetPasswordEmailMessage.module.css";

const ResetPasswordEmailMessage = () => {
  return (
    <div className={styles.resetPasswordEmailMessage}>
      <div className={styles.frameParent}>
        <div className={styles.dermaFineInstanceParent}>
          <div className={styles.dermaFineInstance}>
            <div className={styles.dermafine}>
              <h1 className={styles.dermafine1}>
                <span>D</span>
                <span className={styles.erma}>erma</span>
                <span>F</span>
                <span className={styles.ine}>ine</span>
              </h1>
            </div>
          </div>
          <div className={styles.pleaseCheckYour}>
            Please check your email for next steps to reset your password.
          </div>
          <div className={styles.loginForm}>
            <div className={styles.typography}>
              <h3 className={styles.h6}>Recovery Email Sent!</h3>
            </div>
            <button className={styles.button}>
              <div className={styles.unstyledbutton}>
                <div className={styles.content}>
                  <div className={styles.button1}>Email SENT</div>
                  <img
                    className={styles.maskedIcon}
                    alt=""
                    src="/masked-icon1.svg"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
        <button className={styles.button2}>
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
      </div>
      <div className={styles.ellipseShape} />
      <div className={styles.frameTermsAndConditions}>
        <div className={styles.termsAndPrivacyFrame}>
          <div className={styles.termsAndConditions}>Terms and conditions</div>
          <div className={styles.privacyPolicy}>Privacy policy</div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordEmailMessage;
