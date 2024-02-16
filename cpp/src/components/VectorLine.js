import { useMemo } from "react";
import styles from "./VectorLine.module.css";

const VectorLine = ({ frameDocNamePlaceholder, propPadding, propPadding1 }) => {
  const vectorLineStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const uploadingFile1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.vectorLine} style={vectorLineStyle}>
      <div className={styles.headingUploaded}>
        <b className={styles.uploading}>{`Uploading `}</b>
      </div>
      <div className={styles.uploadingFile1} style={uploadingFile1Style}>
        <div className={styles.greyOutline} />
        <div className={styles.documentNameFrame}>
          <input
            className={styles.frameDocName}
            placeholder={frameDocNamePlaceholder}
            type="text"
          />
          <div className={styles.loadingBar} />
        </div>
        <img
          className={styles.vectorShapeIcon}
          alt=""
          src="/vector-shape.svg"
        />
      </div>
    </div>
  );
};

export default VectorLine;
