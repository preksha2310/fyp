import UserCard from "./UserCard";
import ContentBox1 from "./ContentBox1";
import styles from "./Slider.module.css";

const Slider = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.contentBox}>
        <img className={styles.pictureIcon} alt="" src="/picture@2x.png" />
        <div className={styles.content}>
          <div className={styles.icon}>
            <div className={styles.logoGrey}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <b className={styles.zoomerr}>Zoomerr</b>
            </div>
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
          <img className={styles.pictureIcon1} alt="" src="/picture1@2x.png" />
          <h3 className={styles.paragraph}>
            <p className={styles.ourAppServes}>
              Our app serves as your trusted companion in the journey to
              healthier skin, offering seamless integration of cutting-edge
              technology, personalized guidance, and a supportive community.
            </p>
          </h3>
          <UserCard
            userThumb="/user-thumb2@2x.png"
            category="Hamza"
            category1="Team Lead"
          />
        </div>
        <div className={styles.buttonsGroup}>
          <div className={styles.button}>
            <img
              className={styles.iconJamIconsOutlineL2}
              alt=""
              src="/icon--jamicons--outline--logos--plus1.svg"
            />
            <div className={styles.textContainer1}>
              <div className={styles.buttonText1}>Button Text</div>
            </div>
            <img
              className={styles.iconJamIconsOutlineL3}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright1.svg"
            />
          </div>
          <div className={styles.button1}>
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
          </div>
        </div>
        <div className={styles.badge1}>
          <img
            className={styles.iconJamIconsOutlineL6}
            alt=""
            src="/icon--jamicons--outline--logos--circle2.svg"
          />
          <div className={styles.textContainer3}>
            <div className={styles.buttonText3}>Featured</div>
          </div>
          <img
            className={styles.iconIconoirCancel}
            alt=""
            src="/icon--iconoir--cancel1.svg"
          />
        </div>
        <img className={styles.userThumbIcon} alt="" src="/user-thumb@2x.png" />
      </div>
      <ContentBox1
        vector="/vector1.svg"
        sHELLS="SHELLS"
        paragraph="Provide accurate and timely identification of various skin conditions using advanced AI technology."
        category="Preksha "
      />
      <ContentBox1
        vector="/group-46.svg"
        sHELLS="ArtVenue"
        paragraph="Empower users with comprehensive skincare knowledge, fostering informed decisions and proactive skin health management."
        category="Ratnesh"
        propWidth="55.8px"
        propHeight="228px"
      />
      <div className={styles.contentBox1}>
        <img className={styles.pictureIcon2} alt="" src="/picture2@2x.png" />
        <div className={styles.content1}>
          <div className={styles.titleCategory1}>
            <div className={styles.category1}>Category</div>
            <div className={styles.titleContainer1}>
              <b className={styles.title1}>{`Title `}</b>
              <div className={styles.badge2}>
                <img
                  className={styles.iconJamIconsOutlineL7}
                  alt=""
                  src="/icon--jamicons--outline--logos--circle1.svg"
                />
                <div className={styles.textContainer4}>
                  <div className={styles.buttonText4}>+2,5%</div>
                </div>
                <img
                  className={styles.iconIconoirStatUp1}
                  alt=""
                  src="/icon--iconoir--statup.svg"
                />
              </div>
              <img
                className={styles.iconJamIconsOutlineL8}
                alt=""
                src="/icon--jamicons--outline--logos--pencil.svg"
              />
            </div>
          </div>
          <img className={styles.pictureIcon3} alt="" src="/picture3@2x.png" />
          <h3 className={styles.paragraph1}>
            Magna egestas aliquet ut integer non. Sed diam enim nibh sit.
            Aliquam laoreet aenean metus nibh eu scelerisque.
          </h3>
          <UserCard
            userThumb="/user-thumb-1@2x.png"
            category="Roma"
            category1="Frontend"
          />
        </div>
        <div className={styles.buttonsGroup1}>
          <div className={styles.button2}>
            <img
              className={styles.iconJamIconsOutlineL9}
              alt=""
              src="/icon--jamicons--outline--logos--plus1.svg"
            />
            <div className={styles.textContainer5}>
              <div className={styles.buttonText5}>Button Text</div>
            </div>
            <img
              className={styles.iconJamIconsOutlineL10}
              alt=""
              src="/icon--jamicons--outline--logos--arrowright1.svg"
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
          </div>
        </div>
        <div className={styles.badge3}>
          <img
            className={styles.iconJamIconsOutlineL13}
            alt=""
            src="/icon--jamicons--outline--logos--circle2.svg"
          />
          <div className={styles.textContainer7}>
            <div className={styles.buttonText7}>Featured</div>
          </div>
          <img
            className={styles.iconIconoirCancel1}
            alt=""
            src="/icon--iconoir--cancel1.svg"
          />
        </div>
        <img
          className={styles.userThumbIcon1}
          alt=""
          src="/user-thumb1@2x.png"
        />
      </div>
    </div>
  );
};

export default Slider;
