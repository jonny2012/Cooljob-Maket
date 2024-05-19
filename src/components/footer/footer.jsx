import logo from "../../assets/logo/Logo.svg"
import linkendl from "../../assets/icons/links/linkendl.svg"
import google from "../../assets/icons/links/google.svg"
import twitter from "../../assets/icons/links/twitter.svg"
import facebook from "../../assets/icons/links/feFacebook0.svg"
import styles from "./footer.module.css"

function Footer() {
    const cities = [
        "Osaka",
        "Koyasan",
        "Tokyo",
        "Hakone",
        "Nazba",
        "Tomamu",
        "Yokogama",
        "Nagoya",
        "Capporo",
        "Kobe"
    ]
    return (
        <div className={styles.footer}>
            <h3 className={styles.title}>Popular Cities</h3>
            <div className={styles.cities}>
                {cities.map((city, index) => {
                    return <p className={styles.city} key={index}>{city}</p>
                })}
            </div>
            <div className={styles.logo_links}>
                <img src={logo} alt="logo" />
                <div className={styles.links}>
                    <img src={linkendl} alt="img" />
                    <img src={google} alt="img" />
                    <img src={twitter} alt="img" />
                    <img src={facebook} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Footer