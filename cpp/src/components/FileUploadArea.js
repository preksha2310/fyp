import { useMemo } from "react";
import styles from "./FileUploadArea.module.css";

const FileUploadArea = ({
  supportedFormatesJPEGPNG,
  dragDropContainerPadding,
  propAlignSelf,
  propPadding,
  propPadding1,
}) => {
  const fileUploadAreaStyle = useMemo(() => {
    return {
      padding: dragDropContainerPadding,
    };
  }, [dragDropContainerPadding]);

  const dragnDropFilesStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
    };
  }, [propAlignSelf, propPadding]);

  const supportedFormatsStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.fileUploadArea} style={fileUploadAreaStyle}>
      <div className={styles.uploadFileBackground} />
      <img
        className={styles.uploadIcon}
        loading="eager"
        alt=""
        src="/upload-icon.svg"
      />
      <div className={styles.dragnDropFiles} style={dragnDropFilesStyle}>
        <div className={styles.dragDropFiles}>
          <b className={styles.dragDropContainer}>
            <span className={styles.dragDrop}>{`Drag & drop files or`}</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.browse}>Browse</span>
          </b>
        </div>
        <div className={styles.supportedFormats} style={supportedFormatsStyle}>
          <div className={styles.supportedFormatesJpeg}>
            {supportedFormatesJPEGPNG}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploadArea;
