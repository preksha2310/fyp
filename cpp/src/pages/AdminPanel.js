import FrameComponent1 from "../components/FrameComponent1";
import What from "../components/What";
import CurrentBalance from "../components/CurrentBalance";
import Message from "../components/Message";
import styles from "./AdminPanel.module.css";

const AdminPanel = () => {
  return (
    <div className={styles.adminPanel}>
      <FrameComponent1 />
      <main className={styles.balanceInfo}>
        <section className={styles.framebalanceinfo}>
          <What />
          <div className={styles.currentBalance}>
            <div className={styles.currentBalance1}>
              <h1 className={styles.whatFoodsTo}>What Foods to avoid</h1>
              <h3
                className={styles.foodsToAvoid}
              >{`Foods to avoid list . `}</h3>
            </div>
            <div className={styles.currentBalance2}>
              <h1 className={styles.whatFoodsTo1}>What Foods to eat</h1>
              <h3 className={styles.foodsToEat}>{`Foods to eat list . `}</h3>
            </div>
          </div>
          <CurrentBalance />
          <div className={styles.thingsToDo}>
            <h1 className={styles.thingsToDo1}>Things To Do</h1>
            <h3
              className={styles.thingsThatCan}
            >{`Things that can make the skin condition better `}</h3>
          </div>
          <div className={styles.messageComponent}>
            <Message />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminPanel;
