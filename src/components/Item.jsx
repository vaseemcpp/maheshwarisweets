import React, { useState } from 'react'
import styles from "./Sweets.module.css";

const Item = ({item}) => {


// const[cart,setCart] = useState([]);
// const [warning,setWarning] = useState(false);

//   const  handleClick = (item) =>{
//    let isPresent = false;
//   cart.forEach((product) => {
//     if(item.id === product.id)
//     isPresent = true;
//   })
//   if(isPresent){
//     setWarning(true);
//     setTimeout(()=> {
//       setWarning(false)
//     },2000)
//   }
//   return ;
//  setCart([...cart,item]);
//     }

  return (
    <div class="col">
    <div class="card shadow-sm">
      <img className={styles.SweetImg} src={item.img} alt="" />
      <div class="card-body">
      <h3 class="card-heading">{item.name}</h3>
          <h5 class="card-heading">
        Price:{item.price}
          </h5>
        <p class="card-text"> Shelf-life:{item.shelflife}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <button type="button" class="btn btn-sm btn-outline-secondary"
            
             >Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Item