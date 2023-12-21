import imgs from '../assets/Pr.webp';
import styles from "./Promotion.module.css"

const Promotion = () =>{
    return(
        <div className={styles.promo}>
            
            <img src={imgs} alt={"imgs"} />
        </div>
    );
}

export default Promotion;