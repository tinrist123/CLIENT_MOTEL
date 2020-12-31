import React from "react";
import "./Home.scss";
import Hero from "./Hero/Hero";
import ListCardTrending from "./TrendingSuggest/ListCardTrending";
import SuggestRoom from "./ListRoom/SuggestRoom";

function Home() {
  return (
    <div className="home">
      <Hero />
      <div className="container">
        <ListCardTrending />
        <SuggestRoom />
      </div>
    </div>
  );
}

export default Home;
