import styles from "./button.module.css"


function Button({text}){
        return  <button className={styles.headerbutton}>{text}</button>
        
}
export default Button