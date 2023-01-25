import React from "react";
import "./Shop.css";
import BC from "../../assets/BCsnip.png";

function Shop() {
  const locations = [
    {
      name: "Online",
      picture: BC,
      description: "Get our premium CBD online. Free Shipping!",
      location: "Available for NM, CO, AZ only",
    },
    {
      name: "Online",
      picture: BC,
      description: "Get our premium CBD online. Free Shipping!",
      location: "Available for NM, CO, AZ only",
    },
    {
      name: "Online",
      picture: BC,
      description: "Get our premium CBD online. Free Shipping!",
      location: "Available for NM, CO, AZ only",
    },
    {
      name: "Online",
      picture: BC,
      description: "Get our premium CBD online. Free Shipping!",
      location: "Available for NM, CO, AZ only",
    },
  ];
  return (
    <section className="Shop__container">
      <div className="Shop">
        {locations.map((location) => {
          return (
            <div className="Location__card" key={location.name} id={location.name}>
              <h2>{location.name}</h2>
              <img src={location.picture} />
              <h3>{location.description}</h3>
              <p>{location.location}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default Shop;
