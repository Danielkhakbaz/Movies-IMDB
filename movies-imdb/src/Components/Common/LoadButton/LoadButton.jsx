import React from "react";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";

const LoadButton = ({ searchQuery, isLoading, onLoadButton }) => {
    if (isLoading) {
        return (
            <>
                <Spinner />
            </>
        );
    }
    if (!searchQuery) {
        return (
            <>
                <div className="container">
                    <div className="row loadmore__button">
                        <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
                        <button
                            className="btn col-lg-10 col-md-10 col-sm-10 col-10"
                            onClick={onLoadButton}
                        >
                            Load More
                        </button>
                        <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
                    </div>
                </div>
            </>
        );
    }

    return null;
};

LoadButton.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onLoadButton: PropTypes.func.isRequired,
};

export default LoadButton;
