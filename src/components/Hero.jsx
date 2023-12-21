import styles from "./Hero.module.css";

const Hero = () => {
  
  const handleClickScroll = () => {
    const element = document.getElementById('sweets');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return (

    <div className={styles.Hero}>
      <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
       
      </div>
      <div class=" col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3 ">Wide Variety of Products to choose from</h1>
        <p class="lead ">
        At Maheshwari Sweets, we believe in creating moments of joy through the artistry of sweetness. Nestled in the heart of Navlakha Indore our sweet haven is a delightful destination.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
         <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={handleClickScroll}>Explore</button>
        </div>
      </div>
    </div>
  </div>
    </div>
    );
}

export default Hero;