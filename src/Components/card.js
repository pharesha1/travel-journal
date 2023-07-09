import React from "react";

const icon = "https://www.iconpacks.net/icons/2/free-location-icon-2950-thumb.png";

const Card = ({card}) =>{
    return(
        <div className="card-div">
            <img src={card.img} alt={card.location} className="location-img"/>
            <div className="description">
                <div className="location-div">
                    <img src={icon} alt="icon" className="location-icon"/>
                    <span className="location-span">{card.location}</span>
                    <a href={card.link} target="_blank" rel="noopener noreferrer" className="location-link">View on Wikipedia</a>
                </div>
                <h3>{card.title}</h3>
                <span>{card.dates}</span>
                <p>{card.description}</p>
            </div>
        </div>
    );
}

export default Card;