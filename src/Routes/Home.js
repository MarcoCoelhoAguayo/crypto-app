import { configure } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import Coin from "../components/Coin";
import "./Home.css"

export default function Home() {

    const [coins, setCoins] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState("");
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(function() {
        setIsLoading(true)
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=mxn&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            .then(res => res.json())
            .then(data => setCoins(data))
        setIsLoading(false)
    }, [])


    const filterCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const coinElements = filterCoins.map(coin => (
            <Coin
                key={coin.id}  
                id={coin.id}
                img={coin.image}
                name={coin.name}
                symbol={coin.symbol}
                currentPrice={coin.current_price}
                priceChange24h={coin.market_cap_change_24h}
                porcentageChange24h={coin.market_cap_change_percentage_24h}
            />
    ))


    

    return (
        <section className="home-page">
            {isLoading && <h1 className="loading-msg">Page Loading ...</h1>}
            <div className="searchbar">
                <input 
                    type="text"
                    placeholder="Search for a crypto"
                    onChange={handleSearch}
                />
            </div>
            <main>
                {coinElements}
            </main>
            
        </section>

    )
}