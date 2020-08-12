import React from "react";
import { Link } from "react-router-dom";
import NoImageAvailable from "../../../../Assets/Images/NoImageAvailable.jpg";
import PropTypes from "prop-types";

const Movies = ({ searchQuery, movies, imageURL }) => {
    return (
        <>
            <section className="movies">
                <h1 className="movies__title p-4">
                    {searchQuery ? "Searched Movies" : "Popular Movies"}
                </h1>
                <div className="movies__elements p-2">
                    {movies.map((movie) => (
                        <div key={movie.id}>
                            <Link to={`/Movies/${movie.id}`}>
                                {movie.poster_path ? (
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
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

Movies.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    movies: PropTypes.array.isRequired,
    imageURL: PropTypes.string.isRequired,
};

export default Movies;
