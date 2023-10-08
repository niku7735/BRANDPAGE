const HeroSection = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
          <h1>STEP INTO STYLE AND COMFORT</h1>
          <p>
           INTRODUCING THE ALL-NEW NIKE SHOES - WHERE FASHON MEETS FUNCTION!!!<br></br>
           ARE YOU READY TO EXPERIENCE THE PERFECT BLEND OF STYLE,COMFORT AND DURABILITY?
           LOOK NO FURTHER!OUR SHOES ARE DESIGNED TO MEET ALL YOUR FOOTWEAR NEEDS.WHETHER YOU'RE 
           HITTING THE GYM,STROLLING THROUGH THE CITY,OR ATTENDING A SPECIAL EVENT,WE'VE GOT YOU COVERED.
          </p>
  
          <div className="hero-btn">
            <button>Shop Now </button>
            <button className="secondary-btn">Category</button>
          </div>
  
          <div className="shopping">
            <p>Also Available On</p>
  
            <div className="brand-icons">
              <img src="/images/amazon.png" alt="amazon-logo" />
              <img src="/images/flipkart.png" alt="flipkart-logo" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/pngwing.com.png" alt="hero-image" />
        </div>
      </main>
    );
  };
  
  export default HeroSection;