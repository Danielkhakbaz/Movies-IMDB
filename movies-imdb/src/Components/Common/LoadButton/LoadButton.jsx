import React from "react";
import Spinner from "../Spinner/Spinner";

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
                    <div className="loadmore__button row">
                        <button
                            className="btn col-lg-12 col-md-12 col-sm-12 col-12"
                            onClick={onLoadButton}
                        >
                            Load More
                        </button>
                    </div>
                </div>
            </>
        );
    }

    return null;
};

export default LoadButton;
