import { configure } from "@testing-library/react";
import React from "react";
import { useParams } from "react-router-dom";
import "./CoinPage.css"
import Axios from "axios";

export default function() {
    let {id} = useParams();
    const [coinInfo, setCoinInfo] = React.useState(null);

    React.useEffect(() => {
        Axios.get(`https://api.coingecko.com/api/v3/coins/${id}`).then(
          (response) => {
            setCoinInfo(response.data);
          }
        );
      }, []);

    console.log(coinInfo)

    if(coinInfo) {
        return (
            <main className="coin-page">
              <div className="coin-content">
                <img className="coin-image" src={coinInfo.image.large} />
                <h1 className="coin-title">{id.toUpperCase()}</h1>
                <div className="coin-stats">
                  <div className="stat">
                    <h3 className="stat-title">Current Price:</h3>
                    <p className="stat-text">${coinInfo.market_data.current_price.mxn}</p>
                  </div>
                  <div className="stat">
                    <h3 className="stat-title">All Time High:</h3>
                    <p className="stat-text">${coinInfo.market_data.ath.mxn}</p>
                  </div>
                  <div className="stat">
                    <h3 className="stat-title">Change Percentage:</h3>
                    <p className="stat-text">{coinInfo.market_data.ath_change_percentage.mxn}</p>
                  </div>
                  <div className="stat">
                    <h3 className="stat-title">All Time Low:</h3>
                    <p className="stat-text">${coinInfo.market_data.atl.mxn}</p>
                  </div>
                  <div className="stat">
                    <h3 className="stat-title">Change Percentage:</h3>
                    <p className="stat-text">{coinInfo.market_data.atl_change_percentage.mxn}</p>
                  </div>  
                </div>
              </div>
            </main>
        )
    }else {
        return null;
    }
   
    
}