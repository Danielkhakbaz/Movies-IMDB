import React from "react";
import HeaderMovieLeft from "../../../Images/Header-Movies-Image.jpg";

const Header = () => {
    return (
        <>
            <div className="wrapper container-fluid">
                <div className="my-1 col-lg-1 col-md-2 col-sm-3 col-4">
                    <img src={HeaderMovieLeft} alt="Movies Header Pic" />
                </div>
            </div>
        </>
    );
};

export default Header;
