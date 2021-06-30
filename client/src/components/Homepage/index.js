import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

function HomePage(props) {
    return (
        <div className="main">
            <h2>Leagues:</h2>
            <div className="card-container">
                <div className="card">
                    <div>Test card</div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;