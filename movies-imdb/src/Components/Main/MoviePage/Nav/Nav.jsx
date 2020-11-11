import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Nav = ({ movieName }) => {
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

Nav.propTypes = {
    movieName: PropTypes.string,
};

export default Nav;
