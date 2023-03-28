import React from "react";
import TopNavBar from "../components/TopNavBar";
import '../styles/MarketPage.css';
import { CheckAuthentication } from "../components/CheckAuthentication";

function MarketPage() {
    return (
        <div className="market-test">
            <CheckAuthentication />
            <TopNavBar />
            <div className="market-text">Market Page</div>
        </div>
    )
}

export default MarketPage;