import {SlOptionsVertical} from "react-icons/sl"
import {BiMessageRoundedCheck} from "react-icons/bi"
import styles from "./NotifyItem.module.css"
import {FaUserShield ,FaVideoSlash,FaVideo} from "react-icons/fa"
const NotifyItem = ({text,type}) => {
  return (
    <div className={styles.notifyItem}>

<div className={styles.notifyContent}>

          {
        MessageIconMapping[type]      
          }
          <p>{text}</p>
</div>
<SlOptionsVertical/>



    </div>
  )
}

export default NotifyItem

const MessageIconMapping={
  message:<BiMessageRoundedCheck/>,
  videocall_start:<FaVideo/>,
  videocall_end:<FaVideoSlash/>,
  profile:<FaUserShield/>
}