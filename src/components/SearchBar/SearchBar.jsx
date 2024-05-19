import style from "../button/button.module.css"
import formstyle from "./SearchBar.module.css"

function SearchBar(){
    return(
        <form action="" className={formstyle.form}>
            <input className={formstyle.icon1} type="search" placeholder="Company" />
            <span>|</span>
            <input className={formstyle.icon2}  type="text" name="" id="" placeholder="City, Country" />
            <button className={style.mainsectionbtn}  type="submit">Search</button>
        </form>
    )
}
export default SearchBar