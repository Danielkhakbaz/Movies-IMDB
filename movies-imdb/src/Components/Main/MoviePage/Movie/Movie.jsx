import React from "react";
import {
    imageBaseURL,
    backdropSize,
    posterSize,
} from "../../../../Services/Config.json";
import HeaderImage from "../../../../Assets/Images/Header-Movies-Image.jpg";

const Movie = ({ movie, director, actors }) => {
    console.log(movie);
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
                className="movie row"
                style={{
                    backgroundImage: `url(${backgroundPoster})`,
                }}
            >
                <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
                <div className="movie__content col-lg-10 col-md-10 col-sm-10 col-10">
                    <img
                        src={`${imageBaseURL}${posterSize}${movie.poster_path}`}
                        alt="img"
                    />
                    <h1 style={{ color: "white" }}>{movie.original_title}</h1>
                    <p style={{ color: "white" }}>PLOT</p>
                    <h4 style={{ color: "white" }}>{movie.overview}</h4>
                    <meter
                        min="0"
                        max="100"
                        optimum="100"
                        low="40"
                        high="70"
                        value={movie.vote_average}
                        style={{ width: "100%" }}
                    />
                    <p>director : </p>
                    {director.length > 1
                        ? director.map((director) => director.name)
                        : director.name}
                    <img src={HeaderImage} alt="" width="40" height="40" />
                </div>
                <div className="col-lg-1 col-md-1 col-sm-1 col-1"></div>
            </div>
        </>
    );
};

export default Movie;
