import React from "react";
import { Data } from "./data";
import Card from "./card";

const Main = () =>{

    const Cards = Data.map(card =>
        <Card
        key = {card.id}
        card = {card}
        />
    );

    return(
        <div className="main-div">
            <div>
                {Cards}
            </div>
        </div>
    );
}
export default Main