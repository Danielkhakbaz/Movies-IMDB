import React from "react";
import {
    imageBaseURL,
    backdropSize,
} from "../../../../Services/API/Config.json";

const Movie = ({ movie, director }) => {
    const getBackgroundPoster = () => {
        if (movie.backdrop_path !== undefined) {
            const backgroundPoster = `${imageBaseURL}${backdropSize}${movie.backdrop_path}`;
            return backgroundPoster;
        }
    };

    const backgroundPoster = getBackgroundPoster();
    return (
        <>
            <div
                className="movie container-fluid"
                style={{
                    backgroundImage: `url(${backgroundPoster})`,
                }}
            >
                <div className="movie__content container">
                    <img
                        className="movie__content--img"
                        src={`${imageBaseURL}w300${movie.poster_path}`}
                        alt="img"
                    />
                    <div
                        className="p-2"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "10px",
                            color: "white",
                        }}
                    >
                        <h1
                            className="movie__row--title my-2"
                            style={{ color: "white" }}
                        >
                            {movie.original_title}
                        </h1>
                        <h6
                            className="movie__content--p my-2"
                            style={{ color: "white" }}
                        >
                            Overview
                        </h6>
                        <p className="my-2" style={{ color: "white" }}>
                            {movie.overview}
                        </p>
                        <meter
                            className="my-2"
                            min="0"
                            max="100"
                            low="40"
                            optimum="100"
                            value={movie.vote_average}
                            style={{ width: "100%" }}
                        />
                        <p className="Movie__p my-2">
                            {director.length > 1 ? "Directors : " : "Director"}
                        </p>
                        {director.map((director) => director.name + " , ")}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Movie;
