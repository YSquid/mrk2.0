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
      location: "Available for NM, CO, AZ only",
      link: "https://mr-ks-premium-reserve-cbd.mybigcommerce.com/cbd/",
    },
    {
      name: "Sassy Grass Juice Bar",
      picture: Sassy,
      description: "Get our premium CBD at Sassy Grass Juice Bar!",
      location: "3100 W. Pichaco Ave. Las Cruces, NM",
      link: "https://www.facebook.com/SassyGrassJuice/",
      maplink:
        "https://www.google.com/maps/place/3100+W+Picacho+Ave,+Las+Cruces,+NM+88007,+USA/@32.3115453,-106.8179529,17z/data=!3m1!4b1!4m5!3m4!1s0x86de3e09d8e9f08b:0x21760296e4fe7bce!8m2!3d32.3115453!4d-106.8179529",
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
