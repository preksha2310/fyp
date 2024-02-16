import { useMemo } from "react";
import styles from "./DermaFine.module.css";

const DermaFine = ({ fWidth, fPadding, ineDisplay }) => {
  const dermaFineStyle = useMemo(() => {
    return {
      width: fWidth,
      padding: fPadding,
    };
  }, [fWidth, fPadding]);

  const dermaFine1Style = useMemo(() => {
    return {
      display: ineDisplay,
    };
  }, [ineDisplay]);

  return (
    <div className={styles.dermafine} style={dermaFineStyle}>
      <h1 className={styles.dermafine1} style={dermaFine1Style}>
        <span>D</span>
        <span className={styles.erma}>erma</span>
        <span>F</span>
        <span className={styles.ine}>ine</span>
      </h1>
    </div>
  );
};

export default DermaFine;
