import FileUploadArea from "../components/FileUploadArea";
import styles from "./Error1.module.css";

const Error1 = () => {
  return (
    <div className={styles.error}>
      <div className={styles.component1}>
        <div className={styles.whiteBackground} />
        <div className={styles.whiteBackgroundRect}>
          <div className={styles.headingUpload}>
            <h2 className={styles.upload}>Upload</h2>
          </div>
        </div>
        <div className={styles.fileUploadAreaParent}>
          <FileUploadArea
            supportedFormatesJPEGPNG="Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT"
            dragDropContainerPadding="0px 30px 0px 0px"
            propAlignSelf="stretch"
            propPadding="0px var(--padding-12xs)"
            propPadding1="12px 5px 12px 8px"
          />
          <div className={styles.errorMessageFrame}>
            <div className={styles.headingUploaded}>
              <b className={styles.uploading}>{`Uploading `}</b>
            </div>
            <div className={styles.uploadingFile1}>
              <input className={styles.redOutline} type="text" />
              <div className={styles.crossVectorIcon}>
                <div className={styles.documentNameParent}>
                  <div className={styles.documentName}>
                    <div className={styles.yourFileHerepdf}>
                      your-file-here.PDF
                    </div>
                  </div>
                  <img
                    className={styles.crossIcon}
                    loading="eager"
                    alt=""
                    src="/cross-icon.svg"
                  />
                </div>
              </div>
              <div className={styles.errorMessage}>
                <div className={styles.thisDocumentIs}>
                  This document is not supported, please delete and upload
                  another file.
                </div>
              </div>
            </div>
          </div>
          <button className={styles.cta}>
            <b className={styles.label}>Upload Files</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error1;
