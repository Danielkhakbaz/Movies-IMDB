import React from "react";
import { imageBaseURL } from "../../../../Services/API/Config.json";
import PropTypes from "prop-types";

const Actors = ({ actors }) => {
    const posterSize = "w154";

    return (
        <>
            <h1 className="movies__title">Actors</h1>
            <div className="movies__elements1 p-2">
                {actors.map((actor) =>
                    actor.profile_path ? (
                        <div key={actor.id} className="movie-actor">
                            <img
                                className="movies__elements--img"
                                width="150"
                                src={`${imageBaseURL}${posterSize}${actor.profile_path}`}
                                alt="Every Single Movie Pic"
                            />
                            <h6>{actor.name}</h6>
                        </div>
                    ) : null
                )}
            </div>
        </>
    );
};

Actors.propTypes = {
    actors: PropTypes.array.isRequired,
};

export default Actors;
