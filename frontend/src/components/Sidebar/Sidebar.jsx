import styles from "./Sidebar.module.css"
import {RiDashboardFill ,RiUserSearchFill } from "react-icons/ri"
import {AiFillMessage } from "react-icons/ai"
import {FaShopify,FaUserShield} from "react-icons/fa"
import {MdSupportAgent} from "react-icons/md"


const Sidebar = () => {
  return (
    <div className={styles.sidebar_container}>
        <div className={styles.sidebar_header}>
            <img  src="/icons/help.png" alt="helpMe"/>
               <h1 className={styles.app_name}>
                LetsHelp!
                </h1> 
        </div>
        <ul className={styles.sidebar_list}>
            <li className={styles.sidebar_list_item}>
                <div className={styles.list_content}>
                 <RiDashboardFill/>
                <p>
                    Dashboard
                </p>
                </div>
            </li>
            <li className={styles.sidebar_list_item}>
                <div className={styles.list_content}>
                <RiUserSearchFill/>
                <p>Search</p>
                </div>
            </li>
            <li className={styles.sidebar_list_item}>
            <div className={styles.list_content}>
                <AiFillMessage/>
                <p>Messages</p>
                </div>
            </li>
            <li className={styles.sidebar_list_item}>
            <div className={styles.list_content}>
                <FaShopify/>
                <p>
                    Shop
                </p>
                </div>
            </li>
            <li className={styles.sidebar_list_item}>
                <div className={styles.list_content}>
                    <MdSupportAgent/>
                <p>Support</p>
                </div>
            </li>
            <li className={styles.sidebar_list_item}>
                <div className={styles.list_content}>
                <FaUserShield/>
                <p>Profile</p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar