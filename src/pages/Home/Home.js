import React from "react";
import "./Home.scss";
import Hero from "./Hero/Hero";
import ListCardTrending from "./TrendingSuggest/ListCardTrending";
import SuggestRoom from "./ListRoom/SuggestRoom";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { utilityAdded } from "../../Redux/features/Filter/FilterSlice";

function Home() {
  console.log(nanoid());
  const dispatch = useDispatch();
  dispatch(utilityAdded([1, 2, 3]));
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
