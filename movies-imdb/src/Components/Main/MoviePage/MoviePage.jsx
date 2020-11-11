import React, { Component } from "react";
import Nav from "./Nav/Nav";
import Movie from "./Movie/Movie";
import BudgetNav from "./BudgetNav/BudgetNav";
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

        fetch(movie).then((movie) =>
            movie.status === 404
                ? this.props.history.push("/NotFound/404")
                : null
        );

        if (fetch(movie).then((movie) => movie.status === 200)) {
            fetch(movie)
                .then((movie) => movie)
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
        }
    };
    render() {
        const { movie, director, actors } = this.state;
        return (
            <>
                <section>
                    <Nav movieName={movie.original_title} />
                    <Movie movie={movie} director={director} actors={actors} />
                    <BudgetNav movie={movie} />
                    <Actors actors={actors} />
                </section>
            </>
        );
    }
}

export default MoviePage;
