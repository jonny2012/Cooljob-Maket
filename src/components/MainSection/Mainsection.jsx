import style from "./MainSection.module.css"
import SearchBar from "../SearchBar/SearchBar"

function MainSection() {
    return (

        <div className={style.mainsection}>
            <h1 className={style.h1}>Get Job in one click</h1>
            <SearchBar />
        </div>
    )
}
export default MainSection