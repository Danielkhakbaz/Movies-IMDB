import React, { Component } from "react";
import Poster from "../Poster/Poster";
import SearchBox from "../../Common/SearchBox/SearchBox";
import Movies from "../../Main/Movies/Movies";
import LoadButton from "../../Common/LoadButton/LoadButton";
import { apiURL, apiKey, imageBaseURL, posterSize } from "../../../Config.json";
import axios from "axios";

class Home extends Component {
    state = {
        movies: [],
        searchQuery: "",
        currentPage: 1,
    };
    async componentDidMount() {
        const { currentPage } = this.state;
        let { data } = await axios.get(
            `${apiURL}movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`
        );
        this.setState({
            movies: [...data.results],
            currentPage: Number(currentPage + 2),
        });
    }
    render() {
        const { searchQuery, currentPage } = this.state;
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
                <LoadButton
                    currentPage={currentPage}
                    searchQuery={searchQuery}
                    onLoadButton={this.handleLoadButton}
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
    handleLoadButton = async () => {
        const { currentPage } = this.state;
        let { data } = await axios.get(
            `${apiURL}movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`
        );
        this.setState({
            movies: [...this.state.movies, ...data.results],
            currentPage: Number(currentPage + 1),
        });
    };
}

export default Home;
