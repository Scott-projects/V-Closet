import React from "react";
import TopNavBar from "../components/TopNavBar";
import '../styles/MarketPage.css';

function MarketPage() {
    return (
        <div className="market-test">
            <div class="triangle-container">
                <div class="triangle"></div>
            </div>
            <TopNavBar />
            <div className="market-text">Market Page</div>
        </div>
    )
}

export default MarketPage;