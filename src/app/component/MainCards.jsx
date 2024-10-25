"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "./CardComponent";
const CardsSwipper = () => {
  const [CardsData, SetCardsData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/data/CardData.json");
        const data = response.data;
        SetCardsData(data);
      } catch (error) {
        console.error(`Error Fetching CardData : ${error}`);
      }
    };
    getData();
  }, []);

  const CardsJsx = CardsData.map((product, index) => {
    console.log(product);
    
    return <CardComponent key={index} product={product} />;
  });
  return (
    <div className="grid grid-cols-3 gap-4 max-w-screen-xl mx-auto px-2">
      {CardsJsx}
    </div>
  );
};

export default CardsSwipper;
