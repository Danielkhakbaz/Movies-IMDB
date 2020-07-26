import React from "react";

const Movies = ({ searchQuery, movies, imageURL }) => {
    return (
        <>
            <div className="movies">
                <h1 className="movies__h1 p-4">
                    {searchQuery ? "Searched movies" : "Popular movies"}
                </h1>
                <div className="movies__elements p-2">
                    {movies.map((movie) => (
                        <React.Fragment key={movie.id}>
                            <img
                                className="movies__elements--img"
                                src={`${imageURL}${movie.poster_path}`}
                                alt="Every Single Movie Pic"
                            />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Movies;
