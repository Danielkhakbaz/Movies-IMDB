import React, { Component } from "react";
import Navigation from "./Navigation/Navigation";
import Movie from "./Movie/Movie";
import Budget from "./Budget/Budget";
import Actors from "./Actors/Actors";
import { apiURL, apiKey } from "../../../Services/API/Config.json";

class MoviePage extends Component {
    state = {
        movie: [],
        director: [],
        actors: [],
    };
    componentDidMount() {
        const { match } = this.props;

        const movie = `${apiURL}movie/${match.params.id}?api_key=${apiKey}&language=en-us`;
        this.fetchData(movie);
    }
    fetchData = (movie) => {
        const { match } = this.props;

        fetch(movie)
            .then((movie) => movie.json())
            .then((movie) => {
                const data = `${apiURL}movie/${match.params.id}/credits?api_key=${apiKey}`;
                fetch(data)
                    .then((people) => people.json())
                    .then((people) => {
                        const director = people.crew.filter(
                            (people) => people.job === "Director"
                        );
                        this.setState({
                            movie: movie,
                            director: director,
                            actors: people.cast,
                        });
                    });
            })
            .catch((error) => console.error("Error", error));
    };
    render() {
        const { movie, director, actors } = this.state;
        return (
            <>
                <div>
                    <Navigation movieName={movie.original_title} />
                    <Movie movie={movie} director={director} actors={actors} />
                    <Budget movie={movie} />
                    <Actors actors={actors} />
                </div>
            </>
        );
    }
}

export default MoviePage;
