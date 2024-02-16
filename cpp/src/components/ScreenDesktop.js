import ScreenDesktop1 from "./ScreenDesktop1";
import styles from "./ScreenDesktop.module.css";

const ScreenDesktop = () => {
  return (
    <div className={styles.screendesktop}>
      <ScreenDesktop1
        feature="dermafine ai"
        desktopAppPlaceholder1="/desktopappplaceholder1.svg"
      />
    </div>
  );
};

export default ScreenDesktop;
