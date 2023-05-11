import NotifyItem from "../NofifyItem/NotifyItem"
import styles from "./RecentActivities.module.css"

const RecentActivities = () => {
  return (
    <div className={styles.recent_Activities}>
        <div className={styles.recentActivites_header}>

             <h3>Recent Activity</h3>
            

        </div>
        <div className={styles.NotifyList}>
            <NotifyItem type="message" text={"You received a message from Kylefullstack" }/>
            <NotifyItem text="Your profile has successfully edited" type={"profile"} />
            <NotifyItem type="videocall_start" text={"You started video call with JohnClark " }/>
            <NotifyItem type="videocall_end" text={"Video call ended with JohnClark " }/>
           
        </div>
    </div>
  )
}

export default RecentActivities