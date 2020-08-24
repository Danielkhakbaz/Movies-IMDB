import React from "react";
import {
    calcTime,
    convertMoney,
} from "./../../../../Services/Convertor/Convertor";

const Budget = ({ movie }) => {
    return (
        <>
            <div className="navigation">
                <div className="container-fluid">
                    <div className="row">
                        <h5
                            className="col-lg-4 col-md-4 col-sm-4 col-4 my-2"
                            style={{ textAlign: "center", color: "white" }}
                        >
                            <i className="far fa-clock m-2" />
                            Running Time : {calcTime(movie.runtime)}
                        </h5>
                        <h5
                            className="col-lg-4 col-md-4 col-sm-4 col-4 my-2"
                            style={{ textAlign: "center", color: "white" }}
                        >
                            <i className="far fa-money-bill-alt m-2" />
                            Budget : {convertMoney(movie.budget)}
                        </h5>
                        <h5
                            className="col-lg-4 col-md-4 col-sm-4 col-4 my-2"
                            style={{ textAlign: "center", color: "white" }}
                        >
                            <i className="fas fa-funnel-dollar m-2" />
                            Profit : {convertMoney(movie.revenue)}
                        </h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Budget;
