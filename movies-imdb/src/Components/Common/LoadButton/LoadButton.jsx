import React from "react";
import Spinner from "../Spinner/Spinner";

const LoadButton = ({ currentPage, searchQuery, isLoading, onLoadButton }) => {
    if (isLoading) {
        return <Spinner />;
    }
    if (currentPage <= 4 && !searchQuery) {
        return (
            <>
                <div className="container-fluid">
                    <div className="row movies__button">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <button
                                className="btn col-lg-12 col-md-12 col-sm-12 col-12"
                                onClick={onLoadButton}
                            >
                                Load More
                            </button>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </>
        );
    }
};

export default LoadButton;
