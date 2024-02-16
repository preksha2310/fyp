import styles from "./CurrentBalance.module.css";

const CurrentBalance = () => {
  return (
    <div className={styles.currentBalance}>
      <div className={styles.ingredients}>
        <h1 className={styles.ingredientsToBe}>
          Ingredients to be considered in skincare products
        </h1>
        <h3
          className={styles.skincareIngredientsThat}
        >{`skincare ingredients that can be used in while considering skincare `}</h3>
      </div>
      <div className={styles.skincareLinks}>
        <div className={styles.someSkincareWrapper}>
          <h1 className={styles.someSkincare}>Some Skincare</h1>
        </div>
        <div className={styles.linksToSkincareProductsWrapper}>
          <h3
            className={styles.linksToSkincare}
          >{`links to skincare products `}</h3>
        </div>
      </div>
    </div>
  );
};

export default CurrentBalance;
