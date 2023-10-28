import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Grid from "./components/Grid"
import data from "./data";

export default function App(){
  const cards = data.map(item => {
    return (
      <Card 
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots }
  />
      )
  })
  return(
    <div>
      <Navbar />
      <section className="cards-list">
      {cards}
      </section>
      
    </div>
  )
}