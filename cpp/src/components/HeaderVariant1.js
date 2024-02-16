import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HeaderVariant1.module.css";

const HeaderVariant = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/1-login");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/2-signup");
  }, [navigate]);

  return (
    <header className={styles.headervariant2}>
      <div className={styles.left}>
        <h1 className={styles.dermafine}>
          <span>D</span>
          <span className={styles.erma}>erma</span>
          <span>F</span>
          <span className={styles.ine}>ine</span>
        </h1>
        <div className={styles.buttonsGroup}>
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
      <div className={styles.buttonsGroup1}>
        <div className={styles.button} onClick={onButtonContainerClick}>
          <img
            className={styles.iconJamIconsOutlineL12}
            alt=""
            src="/icon--jamicons--outline--logos--plus.svg"
          />
          <button className={styles.textContainer4}>
            <div className={styles.buttonText4}>Log In</div>
          </button>
          <img
            className={styles.iconJamIconsOutlineL13}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright.svg"
          />
          <div className={styles.badge4}>
            <div className={styles.text}>9</div>
          </div>
        </div>
        <button className={styles.button1} onClick={onButtonClick}>
          <img
            className={styles.iconJamIconsOutlineL14}
            alt=""
            src="/icon--jamicons--outline--logos--plus1.svg"
          />
          <div className={styles.textContainer5}>
            <div className={styles.buttonText5}>Sign Up</div>
          </div>
          <img
            className={styles.iconJamIconsOutlineL15}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright1.svg"
          />
        </button>
      </div>
    </header>
  );
};

export default HeaderVariant;
