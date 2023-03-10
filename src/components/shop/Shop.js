import React from "react";
import "./Shop.css";
import Queen from "../../assets/Queen.png";
import Power from "../../assets/Power.png";
import Sassy from "../../assets/Sassy.png";
import Logo from "../../assets/Logo.png";

function Shop() {
  const locations = [
    {
      name: "Buy Online",
      picture: Logo,
      description: "Get our premium CBD online. Free Shipping!",
      location: "Available for AZ, CO, NM, NV only",
      link: "https://mr-ks-premium-reserve-cbd.mybigcommerce.com/cbd/",
    },
    {
      name: "Queen Bee's Gallery",
      picture: Queen,
      description: "Get our premium CBD at Queen Bee's!",
      location: "600 S. Solano Dr. Las Cruces, NM",
      link: "https://www.facebook.com/queenbeessmokeshop/",
      maplink:
        "https://www.google.com/maps/place/600+S+Solano+Dr,+Las+Cruces,+NM+88001,+USA/data=!4m2!3m1!1s0x86de3d7e9cbf61e1:0xf46d35003e4afe0?sa=X&ved=2ahUKEwim5dfUpoP7AhVhpIkEHRBKDiAQ8gF6BAgNEAE",
    },
    {
      name: "The Power Nutrition",
      picture: Power,
      description: "Get our premium CBD at The Power Nutrition!",
      location: "902 Pinion St. Las Cruces, NM",
      link: "https://www.facebook.com/conquerfitnesslc/",
      maplink:
        "https://www.google.com/maps/place/902+Pinon+St,+Las+Cruces,+NM+88001,+USA/data=!4m2!3m1!1s0x86de3d9df18492f9:0xcd997d0032c02542?sa=X&ved=2ahUKEwiM2um6poP7AhXxl4kEHcUhC8UQ8gF6BAgSEAE",
    },
    
  ];
  return (
    <section className="Shop__container">
      <div className="Shop">
        {locations.map((location) => {
          return (
            <article
              className="Location__card"
              key={location.name}
              id={location.name}
            >
              <a href={location.link} target="_blank" rel="noreferrer">
                <h2>{location.name}</h2>
              </a>
              <div className="Location__img">
                <a href={location.link} target="_blank" rel="noreferrer">
                  <img src={location.picture} alt="location logo" />
                </a>
              </div>
              <h3>{location.description}</h3>
              {location.maplink ? (
                <a href={location.maplink} target="_blank" rel="noreferrer">
                  {" "}
                  <p>{location.location}</p>
                </a>
              ) : (
                <p>{location.location}</p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Shop;
