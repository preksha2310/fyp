import EllipseIcon from "./EllipseIcon";
import SectionText from "./SectionText";
import Ellipses from "./Ellipses";
import ScreenDesktop from "./ScreenDesktop";
import styles from "./Section2.module.css";

const Section2 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.ellipses}>
        <div className={styles.screenDesktopTopBar}>
          <EllipseIcon />
          <div className={styles.addressBar} />
        </div>
        <div className={styles.rowCirclesArrows} />
        <div className={styles.contentBoxUsercard} />
      </div>
      <div className={styles.headerGroup}>
        <SectionText />
      </div>
      <div className={styles.picture}>
        <Ellipses />
        <div className={styles.bottom}>
          <ScreenDesktop />
        </div>
      </div>
    </section>
  );
};

export default Section2;
