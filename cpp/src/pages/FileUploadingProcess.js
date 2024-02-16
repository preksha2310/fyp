import { useCallback } from "react";
import VectorLine from "../components/VectorLine";
import { useNavigate } from "react-router-dom";
import styles from "./FileUploadingProcess.module.css";

const FileUploadingProcess = () => {
  const navigate = useNavigate();

  const onCTAClick = useCallback(() => {
    navigate("/loading-page");
  }, [navigate]);

  return (
    <div className={styles.fileUploadingProcess}>
      <div className={styles.component2}>
        <div className={styles.whiteBackground} />
        <div className={styles.parentFrameParent}>
          <div className={styles.parentFrame}>
            <h3 className={styles.upload}>Upload</h3>
          </div>
          <div className={styles.fileUploadArea}>
            <div className={styles.uploadFileBackground} />
            <img
              className={styles.uploadIcon}
              loading="eager"
              alt=""
              src="/upload-icon.svg"
            />
            <div className={styles.dragDropFiles}>
              <b className={styles.dragDropContainer}>
                <span
                  className={styles.dragDrop}
                >{`Drag & drop files or`}</span>
                <span className={styles.span}>{` `}</span>
                <span className={styles.browse}>Browse</span>
              </b>
            </div>
          </div>
          <VectorLine
            frameDocNamePlaceholder="your-file-here.PDF"
            propPadding="unset"
            propPadding1="var(--padding-5xs) var(--padding-sm) 0px 0px"
          />
        </div>
        <div className={styles.headingUpload} />
        <button className={styles.cta} onClick={onCTAClick}>
          <b className={styles.label}>Upload Files</b>
        </button>
      </div>
    </div>
  );
};

export default FileUploadingProcess;
