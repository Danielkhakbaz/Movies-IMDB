import React from "react";

const LoadButton = ({ currentPage, searchQuery, onLoadButton }) => {
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
    return null;
};

export default LoadButton;
