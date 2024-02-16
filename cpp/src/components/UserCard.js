import styles from "./UserCard.module.css";

const UserCard = ({ userThumb, category, category1 }) => {
  return (
    <div className={styles.userCard}>
      <img
        className={styles.userThumbIcon}
        loading="eager"
        alt=""
        src={userThumb}
      />
      <div className={styles.details}>
        <div className={styles.category}>{category}</div>
        <div className={styles.category1}>{category1}</div>
      </div>
    </div>
  );
};

export default UserCard;
