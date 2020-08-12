import React from "react";
import {
    calcTime,
    convertMoney,
} from "./../../../../Services/Convertor/Convertor";

const Budget = ({ movie }) => {
    return (
        <>
            <div className="navigation">
                <div className="container">
                    <span className="navigation__span">
                        Time : {calcTime(movie.runtime)}
                        {"/////////////////////"}
                    </span>
                    <span className="navigation__span">
                        Budget : {convertMoney(movie.budget)}
                        {"/////////////////////"}
                    </span>
                    <span className="navigation__span">
                        Reveneue : {convertMoney(movie.revenue)}
                    </span>
                </div>
            </div>
        </>
    );
};

export default Budget;
