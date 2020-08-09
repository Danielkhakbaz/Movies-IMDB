import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ movieName }) => {
    return (
        <>
            <div className="navigation">
                <div className="container">
                    <Link className="navigation__link" to="/Movies">
                        Home
                    </Link>
                    <span className="navigation__span"> / {movieName}</span>
                </div>
            </div>
        </>
    );
};

export default Navigation;
