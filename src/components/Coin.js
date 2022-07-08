import React from "react";
import { Link } from "react-router-dom";
import "./Coin.css"


export default function Coin(props) {
    return(
        <div className="coin-cont">
            <div className="coin">
                <img className="coin-img" src={props.img}></img>
                <p className="coin-name">{props.name}</p>
                <p className="coin-symbol">{props.symbol}</p>
                <p className="coin-price">${props.currentPrice}</p>
                <p className="coin-change">${props.priceChange24h}</p>
                <p className="coin-change-porcentage">{props.porcentageChange24h}</p>
                <Link to={`/${props.id}`}><button onClick={props.handleClick}>More Info</button></Link>
            </div>
        </div>
    )
}