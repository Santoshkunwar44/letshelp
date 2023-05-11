import styles from "./Card.module.css"
import {SlOptionsVertical} from "react-icons/sl"
import {MdOutlineOpenWith} from "react-icons/md"


const Card = ({img,name,info}) => {
  return (
    <div className={styles.card_container}>
            <div className={styles.card_top}>
                <div className={styles.card_image_wrapper}>

                <img src={img }/>
            </div>
                <SlOptionsVertical/>

            </div>
            <div className={styles.card_bottom}>
            <div className={styles.bottom_left}>
                <h4>{name }</h4>
                <p>{info}</p>
            </div>
            <div className={styles.bottom_right}>
                <button  className={styles.open_button}>

                    <MdOutlineOpenWith/>
                <p className={styles.open_text}>open</p>
                </button>
                </div>
                </div>
    </div>
  )
}

export default Card