import React, { Component } from "react";
import MainPicture from "../MainPicture/MainPicture";
import SearchBar from "../../Common/SearchBar/SearchBar";
import Movies from "../../Main/Movies/Movies";
import { apiURL, apiKEY, imageBaseURL, posterSize } from "../../../Config.json";

class Home extends Component {
    state = {
        movies: [],
        loading: false,
        currentPage: 0,
        totalPage: 0,
        searchQuery: "",
    };
    componentDidMount() {
        this.setState({ loading: true });
        const endPoint = `${apiURL}movie/popular?api_key=${apiKEY}&language=en-US&page=1`;
        this.fetchItems(endPoint);
    }
    fetchItems = (endPoint) => {
        fetch(endPoint)
            .then((data) => data.json())
            .then((data) => {
                this.setState({
                    movies: [...this.state.movies, ...data.results],
                    heroImage: this.state.heroImage || data.results[0],
                    loading: false,
                    currentPage: data.page,
                    totalPage: data.total_pages,
                });
            });
    };
    loadingMoreMovies = () => {
        let endPoint = "";
        this.setState({ loading: true });

        if (this.state.searchQuery === "") {
            endPoint = `${apiURL}movie/popular?api_key=${apiKEY}&language=en-US&page=${
                this.state.currentPage + 1
            }`;
        } else {
            endPoint = `${apiURL}movie/popular?api_key=${apiKEY}&language=en-US&query${
                this.state.searchQuery
            }&page=${this.state.currentPage + 1}`;
        }
        this.fetchItems(endPoint);
    };
    getAllData = () => {
        const { movies, searchQuery } = this.state;
        let searched = movies;
        if (searchQuery) {
            window.scrollTo(0, 500);
        }
        if (searchQuery) {
            searched = movies.filter((movie) =>
                movie.title.toLowerCase().startsWith(searchQuery.toLowerCase())
            );
        }
        return { searched };
    };
    handleSearching = (query) => {
        this.setState({ searchQuery: query });
    };
    render() {
        const { searchQuery } = this.state;
        const { searched } = this.getAllData();
        return (
            <>
                <MainPicture />
                <SearchBar
                    value={searchQuery}
                    onChange={this.handleSearching}
                />
                <Movies
                    searchQuery={searchQuery}
                    movies={searched}
                    image={`${imageBaseURL}${posterSize}`}
                />
            </>
        );
    }
}

export default Home;
