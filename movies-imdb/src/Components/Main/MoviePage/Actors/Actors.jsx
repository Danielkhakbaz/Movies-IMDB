import React from "react";
import { imageBaseURL } from "../../../../Services/API/Config.json";
import NoImageAvailable from "../../../../Assets/Images/NoImageAvailable.jpg";

const Actors = ({ actors }) => {
    const posterSize = "w154";
    return (
        <>
            <h1>Actors</h1>
            <div className="movies__elements1 p-2">
                {actors.map((actor) => (
                    <div key={actor.id} className="movie-actor">
                        <img
                            className="movies__elements--img"
                            width="150"
                            src={
                                actor.profile_path
                                    ? `${imageBaseURL}${posterSize}${actor.profile_path}`
                                    : `${NoImageAvailable}`
                            }
                            alt="Every Single Movie Pic"
                        />
                        <h6>{actor.name}</h6>
                        <h6>{actor.character}</h6>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Actors;
