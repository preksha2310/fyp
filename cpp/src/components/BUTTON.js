import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BUTTON.module.css";

const BUTTON = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/2-signup");
  }, [navigate]);

  return (
    <div className={styles.bUTTON}>
      <div className={styles.container}>
        <div className={styles.col}>
          <div className={styles.sectionText}>
            <div className={styles.top}>
              <b className={styles.caption}>Caption</b>
              <div className={styles.mainHeadline}>Headline One</div>
              <h1 className={styles.secondaryHeadline}>Why Choose us</h1>
            </div>
            <div className={styles.paragraph}>
              Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
              Neque pellentesque donec et tellus ac varius tortor, bibendum.
              Nulla felis ac turpis at amet. Purus malesuada placerat arcu at
              enim elit in accumsan.
            </div>
            <div className={styles.buttonsGroup}>
              <div className={styles.button1}>
                <img
                  className={styles.iconJamIconsOutlineL}
                  alt=""
                  src="/icon--jamicons--outline--logos--plus1.svg"
                />
                <div className={styles.textContainer}>
                  <div className={styles.buttonText}>Button Text</div>
                </div>
                <input
                  className={styles.iconJamIconsOutlineL1}
                  type="checkbox"
                />
              </div>
              <div className={styles.button2}>
                <img
                  className={styles.iconJamIconsOutlineL2}
                  alt=""
                  src="/icon--jamicons--outline--logos--plus.svg"
                />
                <div className={styles.textContainer1}>
                  <div className={styles.buttonText1}>Button Text</div>
                </div>
                <img
                  className={styles.iconJamIconsOutlineL3}
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright.svg"
                />
              </div>
              <div className={styles.button3}>
                <img
                  className={styles.iconJamIconsOutlineL4}
                  alt=""
                  src="/icon--jamicons--outline--logos--plus.svg"
                />
                <div className={styles.textContainer2}>
                  <div className={styles.buttonText2}>Button Text</div>
                </div>
                <img
                  className={styles.iconJamIconsOutlineL5}
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright.svg"
                />
                <div className={styles.badge}>
                  <div className={styles.text}>9</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.listItemWith}>
              <img
                className={styles.iconJamIconsOutlineL6}
                loading="eager"
                alt=""
                src="/icon--jamicons--outline--logos--check@2x.png"
              />
              <div className={styles.firstButton}>
                Precise AI for reliable skin diagnoses.
              </div>
            </div>
            <div className={styles.listItemWith1}>
              <img
                className={styles.iconJamIconsOutlineL7}
                alt=""
                src="/icon--jamicons--outline--logos--check@2x.png"
              />
              <div className={styles.text1}>
                Empowering you with dermatological insights.
              </div>
            </div>
            <div className={styles.listItemWith2}>
              <img
                className={styles.iconJamIconsOutlineL8}
                alt=""
                src="/icon--jamicons--outline--logos--check@2x.png"
              />
              <div className={styles.text2}>
                Tailored solutions for your unique skin.
              </div>
            </div>
          </div>
          <button className={styles.button} onClick={onButtonClick}>
            <img
              className={styles.iconJamIconsOutlineL9}
              alt=""
              src="/icon--jamicons--outline--logos--plus.svg"
            />
            <div className={styles.textContainer3}>
              <div className={styles.signUpNow}>Sign up now</div>
            </div>
            <img
              className={styles.iconJamIconsOutlineL10}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright.svg"
            />
          </button>
        </div>
        <div className={styles.decoVideo}>
          <div className={styles.decoVideoChild} />
          <div className={styles.menuitem} />
          <div className={styles.iconjamiconsoutlinelogoscheck} />
        </div>
        <div className={styles.screendesktop}>
          <div className={styles.topBar}>
            <div className={styles.circles}>
              <img
                className={styles.iconJamIconsFilledCi}
                loading="eager"
                alt=""
                src="/icon--jamicons--filled--circlef1@2x.png"
              />
              <img
                className={styles.iconJamIconsFilledCi1}
                alt=""
                src="/icon--jamicons--filled--circlef-1.svg"
              />
              <img
                className={styles.iconJamIconsFilledCi2}
                alt=""
                src="/icon--jamicons--filled--circlef-2.svg"
              />
            </div>
            <div className={styles.arrows}>
              <img
                className={styles.iconJamIconsOutlineL11}
                alt=""
                src="/icon--jamicons--outline--logos--chevronleft.svg"
              />
              <img
                className={styles.iconJamIconsOutlineL12}
                alt=""
                src="/icon--jamicons--outline--logos--chevronright.svg"
              />
            </div>
            <div className={styles.addressBar}>
              <div className={styles.feature}>feature</div>
            </div>
          </div>
          <div className={styles.video}>
            <div className={styles.icon}>
              <img
                className={styles.iconJamIconsOutlineL13}
                loading="eager"
                alt=""
                src="/icon--jamicons--outline--logos--play.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BUTTON;
