import btnstyles from "../../button/button.module.css"
import styles from "./VacanciesGroup.module.css"
import VacancyCard from "./VacancyCard"
import facebook from "../../../assets/images/facebook.svg"

import sony from "../../../assets/images/sony.svg"  
import cocacola from "../../../assets/images/cocacola.svg" 

function VacanciesGroup(){
  const cards =[
        {
            category: "Finance",
            title : " Finance Management in big Company",
            location:" Osaka, Japan",
            company_logo: sony,
            company_name: "Sony",
            time: "3 days ago",
            pointcolor: "blue"
        },
        {
            category: "Sales",
            title: "Sales Manager",
            location: "Koiasan, Japan",
            company_logo: facebook,
            company_name: "Facebook",
            time: "7 days ago",
            pointcolor: "pink"


        },
        {
            category: "Support Service",
            title: "Call center Operator",
            location: "Tomamu, Japan",
            company_logo: cocacola,
            company_name: "Cocacola",
            time: "1 day ago",
            pointcolor: "green"


        },
        {

            category: "Multimedia",
            title: "SYS Administrator",
            location: "Tokyo, Japan",
            company_logo: sony,
            company_name: "Sony",
            time: "3 days ago",
            pointcolor: "orange"
        },
        {
            category: "Design",
            title: "Interier Designer in profesional studio ",
            location: "Yokogama, Japan",
            company_logo: facebook,
            company_name: "Facebook",
            time: "7 days ago",
            pointcolor: "red"
        },
        {
            category: "Truck Transport",
            title: "Long Distance Driver",
            location: "Kobe, Japan",
            company_logo: cocacola,
            company_name: "Cocacola",
            time: "1 day ago",
            pointcolor: "black"

        }

    ]

    return(

            <div className={styles.vacancies_group}>
                <div className={styles.title}>
                <h2>New Vacancies</h2>
                <p> Find your dream job now</p>
                </div>
                <div className={styles.vacancy_cards}>
                    {cards.map((card, index)=>{
                     return <VacancyCard key={index} pointcolor={card.pointcolor} category={card.category} title={card.title} location={card.location}
                       company_logo={card.company_logo} company_name={card.company_name} time={card.time}/>
                    })}
                </div>
             <div className={styles.btn_box}>
                <button className={btnstyles.vacancybtn}> All Vacancies</button>
             </div>
            </div>
    )

}
export default VacanciesGroup