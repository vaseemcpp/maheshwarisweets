import styles from "./Footer.module.css"
import { Link } from "react-router-dom";
const Footer = () =>{
    return(
        <div className={styles.Footer}>
            <div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
      </a>
      <p class="text-body-secondary">© 2023,Maheshwari Sweets,All Rights Reserved</p>
    </div>

    <div class="col mb-3">

    </div>

     <div class="col mb-3">
      <h4>Quick Links</h4>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary"><b>Home</b></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary"><b>Features</b></a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary"><b>Pricing</b></a></li>
        {/* <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li> */}
        {/* <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li> */}
      </ul>
    </div>

    <div class="col mb-3">
      <h4>Contact Information</h4>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary"><b>Address:</b> 166 Chitawad Main Rd, Opp. Prakash Nagar, Navlakha, Chauraha, Indore, Madhya Pradesh 452001</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary"><b>Phone:</b> 0731 240 1473</a></li>
        <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary"><b>Service options:</b> Offers same-day delivery</a></li>
        {/* <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li> */}
        {/* <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li> */}
      </ul>
    </div>

    <div class="col mb-3">
      <h4>Policies</h4>
      <ul class="nav flex-column">
     <Link to="/ShippingPolicy"> <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary"><b>Shipping Policy</b></a></li></Link> 
       <Link to="/PaymentPolicy"><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary"><b>Payment Policy</b></a></li></Link>
        <Link to="/RefundPolicy"><li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary"><b>Refund Policy</b></a></li></Link>
      </ul>
    </div>
  </footer>
</div>
        </div>
    );
}

export default Footer