import React from "react";

const Movies = ({ SearchQuery, Movies, ImageURL }) => {
    console.log(Movies);
    return (
        <>
            <div className="movies">
                <h1 className="movies__h1 p-4">
                    {SearchQuery ? "Searched movies" : "Popular movies"}
                </h1>
                <div className="movies__elements p-2">
                    {Movies.map((Movie) => (
                        <React.Fragment key={Movie.id}>
                            <img
                                className="movies__elements--img"
                                src={`${ImageURL}${Movie.poster_path}`}
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
