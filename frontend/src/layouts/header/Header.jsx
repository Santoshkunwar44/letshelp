import styles from "./Header.module.css"
import {BiSearchAlt} from "react-icons/bi"

const Header = () => {
  return (
    <div className={styles.header_container}>
            <div className={styles.section_information}>

                <h2 className={styles.section_header_text}>Dashboard</h2>
                <p className={styles.section_header_info_text}>View all your activities</p>




            </div>
            <div className={styles.searchBar}>
                <BiSearchAlt/>
                <input type="text" name="" id="" placeholder="search here..." />

            </div>
    </div>
  )
}

export default Header