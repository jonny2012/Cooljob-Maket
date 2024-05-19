import styles from "./CategoryCard.module.css";


function CategoryCard({ imgSrc, title }) {
    return (
        <div className={styles.categoryCard}>
            <img src={imgSrc} alt="Category icon" className={styles.categoryIcon} />
            <p className={styles.categoryTitle}>{title}</p>
        </div>
    );
}

export default CategoryCard;