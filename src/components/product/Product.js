import React from "react";
import "./Product.css";
import Bottle from "../../assets/cbd-bottle.png";
import USA from '../../assets/USA-NoBG.png'
import GMP from '../../assets/GMP-NoBG.png'
import NonGMO from '../../assets/Non-GMO-NoBG.png'

function Product() {
  return (
    <section className="Product__container">
      <div className="Product">
        <div className="Product__details">

          <div className="bottle">
          <img src={Bottle} className="bottleimg" />
          </div>

          <div className="description">
          <h2>Full Sprectrum CBD Tincture</h2>
          <h3>900mg CBD in 30mL</h3>
          <h3>Ingredients:</h3>
          <ul>
            <li>- Fractionated Coconut Oil (MCT Medium Chain Triglycerides)</li>
            <li>- CO2 Extracted Full Spectrum Hemp Oil</li>
          </ul>
          </div>

        </div>

        <div className="Product__logos">
          <div className="logos">
            <img src={USA} />
            <img src={GMP} />
            <img src={NonGMO} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
