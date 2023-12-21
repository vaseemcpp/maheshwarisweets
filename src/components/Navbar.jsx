import logo2 from "../assets/logo2.jpg";
import styles from "./Navbar.module.css"
import cart from "../assets/cart.png"
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";

const Navbar = () =>{

    const navigate = useNavigate();
function goToLogin(){
navigate("/Login");
}

const  goToSignup =() =>{
  navigate("/Signup");
  }

  const  goToCart =() => {
    navigate("/Cart");
  }

    return (
      <div className={styles.Navbar}>
        <header className="p-3 ">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <img className={styles.logo} src={logo2} alt="" />
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-black">Home</a></li>
            <li><a href="#" id="features" className="nav-link px-2 text-black"  onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}>Features</a></li>
          <li><a href="/Contact" className="nav-link px-2 text-black">Contact Us</a></li>
         
          <li><a href="/About" className="nav-link px-2 text-black">About</a></li>
        </ul>

        

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2" onClick={goToLogin}>Login</button>
          <button type="button" className="btn btn-warning" onClick={goToSignup}>Sign-up</button>
          <img className={styles.cart}src={cart} alt="" onClick={goToCart} />
        </div>
      </div>
    </div>
  </header>
      </div>
    );
}

export default Navbar;