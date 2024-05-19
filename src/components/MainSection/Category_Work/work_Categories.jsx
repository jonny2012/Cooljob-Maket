import finance from '../../../assets/icons/financial.svg';
import truck from '../../../assets/icons/transport.svg';
import design from '../../../assets/icons/design.svg';
import restaurant from '../../../assets/icons/cafe.svg';
import medicine from '../../../assets/icons/medicine.svg';
import multimedia from '../../../assets/icons/medicine.svg';
import chat from '../../../assets/icons/chat.svg';
import management from '../../../assets/icons/management.svg';
import cart from '../../../assets/icons/cart.svg';
import styles from "./work_Categories.module.css";
import arrow from "../../../assets/icons/arrow.svg";
import CategoryCard from "../Category_Work/Category_Card/Category_card.jsx";




function CardsGroup() {
    const cards = [
        {
            imgSrc: finance,
            title: "Finance"
        },
        {
            imgSrc: truck,
            title: "Logistics"
        },
        {
            imgSrc: design,
            title: "Design"
        },
        {
            imgSrc: restaurant,
            title: "Restaurant"
        },
        {
            imgSrc: medicine,
            title: "Medical"
        },
        {
            imgSrc: multimedia,
            title: "Multimedia"
        },
        {
            imgSrc: chat,
            title: "Support"
        },
        {
            imgSrc: management,
            title: "Management"
        },
        {
            imgSrc: cart,
            title: "Sales"
        },
        {
            imgSrc: arrow,
            title: "Show more"
        }
    ];

    return (
        <div className={styles.sectionCategories}>
            <h2>Job Categories</h2>
            <div className={styles.cardsGroup}>
                {cards.map((card, index) => (
                    <CategoryCard key={index} imgSrc={card.imgSrc} title={card.title} />
                ))}
            </div>
        </div>
    );
}

export default CardsGroup;