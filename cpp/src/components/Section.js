import { useCallback } from "react";
import ScreenDesktop1 from "./ScreenDesktop1";
import styles from "./Section.module.css";

const Section = () => {
  const onButtonsGroupClick = useCallback(() => {
    // Please sync "about page" to the project
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.row}>
        <div className={styles.col}>
          <ScreenDesktop1
            feature="DermaFINE.app"
            desktopAppPlaceholder1="/desktopappplaceholder1-1.svg"
            propAlignSelf="unset"
            propWidth="562px"
            propFlexWrap="unset"
            propOverflowX="unset"
            propMinWidth="160px"
            propMinWidth1="160px"
            propWidth1="45%"
            propRight="27.41%"
            propHeight="333px"
          />
          <div className={styles.contentBox}>
            <img
              className={styles.pictureIcon}
              loading="eager"
              alt=""
              src="/picture11@2x.png"
            />
            <div className={styles.content}>
              <div className={styles.icon}>
                <img
                  className={styles.iconIconoirThreeStars}
                  alt=""
                  src="/icon--iconoir--threestars.svg"
                />
              </div>
              <div className={styles.titleCategory}>
                <div className={styles.category}>Category</div>
                <div className={styles.titleContainer}>
                  <b className={styles.title}>{`Title `}</b>
                  <div className={styles.badge}>
                    <img
                      className={styles.iconJamIconsOutlineL}
                      alt=""
                      src="/icon--jamicons--outline--logos--circle1.svg"
                    />
                    <div className={styles.textContainer}>
                      <div className={styles.buttonText}>+2,5%</div>
                    </div>
                    <img
                      className={styles.iconIconoirStatUp}
                      alt=""
                      src="/icon--iconoir--statup.svg"
                    />
                  </div>
                  <img
                    className={styles.iconJamIconsOutlineL1}
                    alt=""
                    src="/icon--jamicons--outline--logos--pencil.svg"
                  />
                </div>
              </div>
              <img
                className={styles.pictureIcon1}
                alt=""
                src="/picture21@2x.png"
              />
              <div className={styles.paragraph}>
                Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in
                metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra
                accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in
                euismod integer.
              </div>
              <div className={styles.userCard}>
                <img
                  className={styles.userThumbIcon}
                  alt=""
                  src="/user-thumb-4@2x.png"
                />
                <div className={styles.details}>
                  <div className={styles.category1}>PRHR</div>
                </div>
              </div>
            </div>
            <div className={styles.buttonsGroup}>
              <div className={styles.button}>
                <img
                  className={styles.iconJamIconsOutlineL2}
                  alt=""
                  src="/icon--jamicons--outline--logos--plus2.svg"
                />
                <div className={styles.textContainer1}>
                  <div className={styles.buttonText1}>Button Text</div>
                </div>
                <input
                  className={styles.iconJamIconsOutlineL3}
                  type="checkbox"
                />
              </div>
              <div className={styles.button1}>
                <img
                  className={styles.iconJamIconsOutlineL4}
                  alt=""
                  src="/icon--jamicons--outline--logos--plus3.svg"
                />
                <div className={styles.textContainer2}>
                  <div className={styles.buttonText2}>Button Text</div>
                </div>
                <img
                  className={styles.iconJamIconsOutlineL5}
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright-12.svg"
                />
              </div>
            </div>
            <div className={styles.badge1}>
              <img
                className={styles.iconJamIconsOutlineL6}
                alt=""
                src="/icon--jamicons--outline--logos--circle3.svg"
              />
              <div className={styles.textContainer3}>
                <div className={styles.buttonText3}>Latest</div>
              </div>
              <img
                className={styles.iconIconoirCancel}
                alt=""
                src="/icon--iconoir--cancel2.svg"
              />
            </div>
            <img
              className={styles.userThumbIcon1}
              alt=""
              src="/user-thumb11@2x.png"
            />
          </div>
        </div>
        <div className={styles.col1}>
          <div className={styles.sectionText}>
            <div className={styles.top}>
              <b className={styles.caption} />
              <div className={styles.mainHeadline}>
                Unlimited ideas for your projects
              </div>
              <h1 className={styles.secondaryHeadline}>Vision and Mission</h1>
            </div>
            <div className={styles.paragraph1}>
              Transforming dermatological care by seamlessly integrating
              cutting-edge AI technology, fostering a global community committed
              to healthy skin, and redefining personalized skincare experiences.
            </div>
            <div className={styles.buttonsGroup1}>
              <div className={styles.button2}>
                <img
                  className={styles.iconJamIconsOutlineL7}
                  alt=""
                  src="/icon--jamicons--outline--logos--plus1.svg"
                />
                <div className={styles.textContainer4}>
                  <b className={styles.buttonText4}>Start For Free</b>
                </div>
                <img
                  className={styles.iconJamIconsOutlineL8}
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright1.svg"
                />
              </div>
              <div className={styles.button21}>
                <img
                  className={styles.iconJamIconsOutlineL9}
                  alt=""
                  src="/icon--jamicons--outline--logos--plus.svg"
                />
                <div className={styles.textContainer5}>
                  <div className={styles.buttonText5}>Button Text</div>
                </div>
                <img
                  className={styles.iconJamIconsOutlineL10}
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright.svg"
                />
              </div>
              <div className={styles.button3}>
                <img
                  className={styles.iconJamIconsOutlineL11}
                  alt=""
                  src="/icon--jamicons--outline--logos--plus.svg"
                />
                <div className={styles.textContainer6}>
                  <div className={styles.buttonText6}>Button Text</div>
                </div>
                <img
                  className={styles.iconJamIconsOutlineL12}
                  alt=""
                  src="/icon--jamicons--outline--logos--arrowright.svg"
                />
                <div className={styles.badge2}>
                  <div className={styles.text}>9</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.buttonsGroup2} onClick={onButtonsGroupClick}>
        <div className={styles.button4}>
          <img
            className={styles.iconJamIconsOutlineL13}
            alt=""
            src="/icon--jamicons--outline--logos--plus.svg"
          />
          <div className={styles.textContainer7}>
            <div className={styles.buttonText7}>Vision and Mission</div>
          </div>
          <img
            className={styles.iconJamIconsOutlineL14}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright2.svg"
          />
        </div>
        <div className={styles.button22}>
          <img
            className={styles.iconJamIconsOutlineL15}
            alt=""
            src="/icon--jamicons--outline--logos--plus.svg"
          />
          <div className={styles.textContainer8}>
            <div className={styles.buttonText8}>Button Text</div>
          </div>
          <img
            className={styles.iconJamIconsOutlineL16}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright.svg"
          />
        </div>
        <div className={styles.button31}>
          <img
            className={styles.iconJamIconsOutlineL17}
            alt=""
            src="/icon--jamicons--outline--logos--plus.svg"
          />
          <div className={styles.textContainer9}>
            <div className={styles.buttonText9}>Button Text</div>
          </div>
          <img
            className={styles.iconJamIconsOutlineL18}
            alt=""
            src="/icon--jamicons--outline--logos--arrowright.svg"
          />
          <div className={styles.badge3}>
            <div className={styles.text1}>9</div>
          </div>
        </div>
      </button>
    </section>
  );
};

export default Section;
