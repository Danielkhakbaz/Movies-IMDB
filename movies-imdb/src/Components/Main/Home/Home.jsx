import React, { Component } from "react";
import Poster from "../Poster/Poster";
import SearchBox from "../../Common/SearchBox/SearchBox";
import Movies from "../../Main/Movies/Movies";
import { apiURL, apiKey, imageBaseURL, posterSize } from "../../../Config.json";
import axios from "axios";

class Home extends Component {
    state = {
        movies: [],
        searchQuery: "",
    };
    async componentDidMount() {
        for (let i = 1; i <= 4; i++) {
            if (i !== 2) {
                let { data } = await axios.get(
                    `${apiURL}movie/popular?api_key=${apiKey}&language=en-US&page=${i}`
                );
                this.setState({
                    movies: [...this.state.movies, ...data.results],
                });
            }
        }
    }
    render() {
        const { searchQuery } = this.state;
        const { searched } = this.searchEngine();
        return (
            <>
                <Poster />
                <SearchBox
                    value={searchQuery}
                    onChange={this.handleSearching}
                />
                <Movies
                    searchQuery={searchQuery}
                    movies={searched}
                    imageURL={`${imageBaseURL}${posterSize}`}
                />
            </>
        );
    }
    searchEngine = () => {
        const { movies, searchQuery } = this.state;
        let searched = movies;
        if (searchQuery) {
            window.scrollTo(0, 500);
            searched = movies.filter((movie) =>
                movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        }
        return { searched };
    };
    handleSearching = (query) => {
        this.setState({ searchQuery: query });
    };
}

export default Home;
