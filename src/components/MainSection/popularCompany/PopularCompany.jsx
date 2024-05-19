import disney from  "../../../assets/images/disney.svg"
import facebook from "../../../assets/images/facebook.svg"
import microsoft from "../../../assets/images/microsoft.svg"
import sony from "../../../assets/images/sony.svg"  
import cocacola from "../../../assets/images/cocacola.svg" 
import style from "./popularCompany.module.css"


function PopularCompany(){


    return(
        <div className={style.section_Companies} >
            <a href="https://1.com">We help you to find Job</a>
            <div className={style.logo_box}>
            <img className={style.logo}  src={disney} alt="img" />
            <img className={style.logo}  src={facebook}  alt="img" />
            <img className={style.logo} src={microsoft}  alt="img" />
            <img className={style.logo} src={sony}  alt="img" />
            <img className={style.logo} src={cocacola}  alt="img" />

            </div>
        </div>
   )
}
export default PopularCompany