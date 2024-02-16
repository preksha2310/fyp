import { useCallback } from "react";
import FileUploadArea from "./FileUploadArea";
import VectorLine from "./VectorLine";
import { useNavigate } from "react-router-dom";
import styles from "./Component.module.css";

const Component = () => {
  const navigate = useNavigate();

  const onCTAClick = useCallback(() => {
    navigate("/file-uploading-process");
  }, [navigate]);

  return (
    <div className={styles.component3}>
      <div className={styles.whiteBackground} />
      <div className={styles.frameUpload}>
        <h2 className={styles.upload}>Upload</h2>
      </div>
      <FileUploadArea supportedFormatesJPEGPNG="Supported formates: JPEG, PNG" />
      <VectorLine frameDocNamePlaceholder="your-file-here.png" />
      <button className={styles.cta} onClick={onCTAClick}>
        <b className={styles.label}>Upload Image</b>
      </button>
    </div>
  );
};

export default Component;
