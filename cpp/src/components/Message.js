import styles from "./Message.module.css";

const Message = () => {
  return (
    <div className={styles.message}>
      <h1 className={styles.print}>PRINT</h1>
      <div className={styles.decorativeFrame}>
        <div className={styles.decoration}>
          <div className={styles.blankComponent}>+</div>
          <div className={styles.blankComponent1}>+</div>
          <div className={styles.blankComponent2}>+</div>
          <div className={styles.blankComponent3}>+</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
