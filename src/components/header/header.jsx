import style from "./header.module.css"
import Button from "../button/button"
import logo from "../../assets/logo/Logo.svg"

function Header() {

    return (
        <div className={style.header}>
            <div className={style.header_left}>
                <a href="localhost:3000.com"><img  src={logo} alt="logo" ></img></a>
                <a href="https://1.com">Поиск работы</a>
                <a href="https://2.com">Поиск стартапов</a>

            </div>
            <div className={style.header_right}>
                <a href="https.#.com">Registration</a>
                <Button text="Login" />
            </div>

        </div>

    )

}

export default Header