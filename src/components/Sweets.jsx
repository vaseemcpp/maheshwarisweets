import React from "react";
import styles from "./Sweets.module.css";
import Data from './Data'
import Item from "./Item";


const Sweets = ({sweetItem}) =>{

    return(
     <>
    <div id="sweets" className={styles.Sweet}>
      <div class="album py-5 ">
<div class="container">
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  {sweetItem.map((item,index) =>{
    return(
      <Item 
      img={item.img} 
      name={item.name} 
      price={item.price} 
      shelflife={item.shelflife} 
      item={item}
      key={item.id}
      />
    )
  })}
</div>
</div>
</div>
</div>
</> 
  );
}

export default Sweets;