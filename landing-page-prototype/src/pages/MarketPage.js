import React from "react";
import TopNavBar from "../components/TopNavBar";
import '../styles/MarketPage.css';
import { CheckAuthentication } from "../components/CheckAuthentication";

function MarketPage() {
    return (
        <CheckAuthentication>
            <div className="market-test">
                <TopNavBar />
                <div className="market-text">Market Page</div>
            </div>
        </CheckAuthentication>
    )
}

export default MarketPage;