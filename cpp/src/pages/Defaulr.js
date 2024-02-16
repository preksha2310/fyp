import { useCallback } from "react";
import FileUploadArea from "../components/FileUploadArea";
import { useNavigate } from "react-router-dom";
import styles from "./Defaulr.module.css";

const Defaulr = () => {
  const navigate = useNavigate();

  const onCTAClick = useCallback(() => {
    navigate("/uploading-process");
  }, [navigate]);

  return (
    <div className={styles.defaulr}>
      <div className={styles.component4}>
        <div className={styles.whiteBackground} />
        <div className={styles.headingUpload}>
          <h2 className={styles.upload}>Upload</h2>
        </div>
        <FileUploadArea
          supportedFormatesJPEGPNG="Supported formates: JPEG, PNG"
          dragDropContainerPadding="145px var(--padding-xl) 140px"
          propAlignSelf="unset"
          propPadding="unset"
          propPadding1="var(--padding-8xs) var(--padding-12xs) var(--padding-8xs) var(--padding-9xs)"
        />
        <button className={styles.cta} onClick={onCTAClick}>
          <b className={styles.label}>Upload Files</b>
        </button>
      </div>
    </div>
  );
};

export default Defaulr;
