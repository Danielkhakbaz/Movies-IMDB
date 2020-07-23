import React from "react";

const Movies = ({ searchQuery, movies, image }) => {
    console.log(movies);
    return (
        <>
            <div className="film">
                <h1 className="p-4 movies__h1">
                    {searchQuery ? "Searched Movies" : "Popular Movies"}
                </h1>
                <div className="movies">
                    {movies.map((movie) => (
                        <React.Fragment key={movie.id}>
                            <img
                                className="movies__element"
                                src={`${image}${movie.poster_path}`}
                                alt=""
                            />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Movies;
