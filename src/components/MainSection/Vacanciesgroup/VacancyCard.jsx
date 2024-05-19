import styles from "./VacancyCard.module.css"
import locationicon from "../../../assets/icons/location.svg"

function VacancyCard({ pointcolor,category,title,location,company_logo,company_name,time}){


    return(
<div className={styles.VacancyCard}>
    <div className={styles.category}>
    <div className={styles.point} style={{backgroundColor:pointcolor}}></div>
    {category}
    </div>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.location}>
        <img className={styles.loc_icon} src={locationicon} alt="img" />
        {location}
    </div>
    <div className={styles.logo_time}>
        <img className={styles.logo} src={company_logo} alt="logo" />
        {company_name}, {time}
    </div>
</div>


    )
}

export default VacancyCard