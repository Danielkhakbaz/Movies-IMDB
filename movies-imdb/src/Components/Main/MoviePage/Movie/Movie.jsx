import React from "react";
import { imageBaseURL, backdropSize } from "../../../../Services/Config.json";

const Movie = ({ movie, directors, actors }) => {
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
                className="movie"
                style={{
                    backgroundImage: `url(${backgroundPoster})`,
                }}
            ></div>
        </>
    );
};

export default Movie;
