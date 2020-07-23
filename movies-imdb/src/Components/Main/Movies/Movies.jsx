import React from "react";

const Movies = ({ searchQuery, movies, image }) => {
    console.log(movies);
    return (
        <>
            <h1 className="m-4 movies__h1">
                {searchQuery ? "Searched Movies" : "Popular Movies"}
            </h1>
            <div className="movies">
                {movies.map((movie) => (
                    <>
                        <img
                            className="movies__element"
                            src={`${image}${movie.poster_path}`}
                            alt=""
                        />
                    </>
                ))}
            </div>
        </>
    );
};

export default Movies;
