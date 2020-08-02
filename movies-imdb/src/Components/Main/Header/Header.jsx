import React from "react";
import HeaderImage from "../../../Assets/Images/Header-Movies-Image.jpg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="container-fluid">
                <div className="row">
                    <div className="col-lg-1 col-md-2 col-sm-3 col-4">
                        <Link to="/Movies">
                            <img
                                src={HeaderImage}
                                alt="Header's Pic which(Website Logo)."
                            />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
