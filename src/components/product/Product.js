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
        <div className="Product__left">
          <div className="bottle">
          <img src={Bottle} className="bottleimg" />
          </div>
          <div className="logos">
            <img src={USA} />
            <img src={GMP} />
            <img src={NonGMO} />
          </div>
        </div>
        <div className="Product__details"></div>
      </div>
    </section>
  );
}

export default Product;
