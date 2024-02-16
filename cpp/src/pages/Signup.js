import OuterFrame from "../components/OuterFrame";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={styles.signup}>
      <div className={styles.signupFrame} />
      <section className={styles.inputFrame}>
        <div className={styles.dermafineWrapper}>
          <div className={styles.dermafine}>
            <h1 className={styles.dermafine1}>
              <span>D</span>
              <span className={styles.erma}>erma</span>
              <span>F</span>
              <span className={styles.ine}>ine</span>
            </h1>
          </div>
        </div>
        <div className={styles.innerFrame}>
          <OuterFrame />
          <footer className={styles.termsConditionsFrame}>
            <div className={styles.privacyPolicy}>
              <div className={styles.termsAndConditions}>
                Terms and conditions
              </div>
              <div className={styles.privacyPolicy1}>Privacy policy</div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default Signup;
