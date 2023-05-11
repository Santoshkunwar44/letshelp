import Card from "../../components/Dashboard/Card/Card"
import RecentActivities from "../../components/Dashboard/RecentActivities/RecentActivities"
import styles from "./Dashboard.module.css"

const Dashboard = () => {
  return (
    <div className={styles.dashboard_container}>
        <div className={styles.top_cards}>

            <Card img={"/icons/users.png"} name={"Friend"} info={"You have 37 friends"}/>
            <Card img={"/icons/message.png"} name={"Message"} info={"2 unread messages"}/>
        
            </div>
            <RecentActivities/>
    </div>
  )
}

export default Dashboard