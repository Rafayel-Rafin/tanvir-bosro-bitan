import { Link } from 'react-router-dom';
import './style/ronaldo.css'
import React from "react";

// Ensure you link this CSS file

function NotFound() {
    return (
        <div className="not-found-page">
            <div className="error-code-container">
                <h1 className="error-code">404</h1>
            </div>
            <h2 className="error-message">Oops! Page Not Found</h2>
            <p className="error-description">The page you're looking for doesn't exist.</p>

            <div className="floating-orbs">
                <div className="orb orb1"></div>
                <div className="orb orb2"></div>
                <div className="orb orb3"></div>
            </div>

            <div className="ronaldo-container">
                <div className="ronaldo">
                    <div className="football"></div>
                </div>
            </div>

            <Link to={'/'} className="go-back-button">Go Back Home</Link>
        </div>



        // <div className="not-found-page">
        //     <div className="error-code-container">
        //         <h1 className="error-code">404</h1>
        //     </div>
        //     <h2 className="error-message">Oops! Page Not Found</h2>
        //     <p className="error-message">The page you're looking for doesn't exist.</p>

        //     <div className="floating-orbs">
        //         <div className="orb"></div>
        //         <div className="orb"></div>
        //         <div className="orb"></div>
        //     </div>

        //     <button className="go-back-button">Go Back Home</button>
        // </div>
    );
}

export default NotFound;
