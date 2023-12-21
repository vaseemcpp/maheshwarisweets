import { useState } from "react";
import React from 'react';
import Dataa from './Dataa'
import Item from "./Item";
const Cart = ({cartItem}) => {

 console.log(cartItem);
 const [price,setPrice] = useState(0);

  return (
    
//    <article>
//     {
//     cartItem.map((item) => {
//       <div>
//         <div>
//           <img src={item.img} alt="" />
//           <p>{item.name}</p>
//         </div>
//       </div>
//     })
// }
//    </article>

<div class="album py-5 ">
<div class="container">
<div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
  {cartItem.map((item,index) =>{
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
   
  )
}

export default Cart