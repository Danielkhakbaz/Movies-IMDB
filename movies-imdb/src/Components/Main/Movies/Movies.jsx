import React from "react";
import NoImageAvailable from "../../../Assets/Images/NoImageAvailable.jpg";

const Movies = ({ searchQuery, movies, imageURL }) => {
    console.log(movies);
    return (
        <>
            <div className="movies">
                <h1 className="movies__h1 p-4">
                    {searchQuery ? "Searched movies" : "Popular movies"}
                </h1>
                <div className="movies__elements p-2">
                    {movies.map((movie) => (
                        <React.Fragment key={movie.id}>
                            {movie.poster_path !== null ? (
                                <img
                                    className="movies__elements--img"
                                    src={`${imageURL}${movie.poster_path}`}
                                    alt="Every Single Movie Pic"
                                />
                            ) : (
                                <img
                                    className="movies__elements--img"
                                    width="200"
                                    src={NoImageAvailable}
                                    alt="No Available Pic"
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Movies;
