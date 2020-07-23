import React from "react";

const Movies = ({ SearchQuery, Movies, ImageURL }) => {
    return (
        <>
            <div className="Movies">
                <h1 className="Movies__h1 p-4">
                    {SearchQuery ? "Searched Movies" : "Popular Movies"}
                </h1>
                <div className="Movies__elements p-2">
                    {Movies.map((Movie) => (
                        <React.Fragment key={Movie.id}>
                            <img
                                className="Movies__elements--img"
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
