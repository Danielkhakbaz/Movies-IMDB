import React from "react";
import { Link } from "react-router-dom";
import HeaderImage from "../../../Assets/Images/Header-Movies-Image.jpg";

const Header = () => {
    return (
        <>
            <header className="container-fluid">
                <div className="row">
                    <Link to="/Movies">
                        <img
                            src={HeaderImage}
                            alt="Website Logo which is Movie Night."
                        />
                    </Link>
                </div>
            </header>
        </>
    );
};

export default Header;
