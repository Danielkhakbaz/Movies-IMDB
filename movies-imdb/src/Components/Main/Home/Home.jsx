import React, { Component } from "react";
import Poster from "./Poster/Poster";
import Sort from "../../Common/Sort/Sort";
import SearchBox from "../../Common/SearchBox/SearchBox";
import Movies from "./Movies/Movies";
import LoadButton from "../../Common/LoadButton/LoadButton";
import {
    apiURL,
    apiKey,
    imageBaseURL,
    posterSize,
} from "../../../Services/API/Config.json";
import axios from "axios";
import _ from "lodash";

class Home extends Component {
    state = {
        movies: [],
        searchQuery: "",
        currentPage: 1,
        isLoading: false,
        sortColumn: { path: "", order: "asc" },
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
        const { searchQuery, isLoading, sortColumn } = this.state;
        const { searched } = this.searchEngine();
        const sorted = _.orderBy(searched, sortColumn.path, sortColumn.order);
        const sorts = [
            {
                path: "",
                labelAsc: "Default",
                labelDesc: "Default",
                className: "sorting__button btn btn-info m-2",
                classNameIconDesc: "fas fa-redo",
            },
            {
                path: "title",
                labelAsc: "A to Z",
                labelDesc: "Z to A",
                className: "sorting__button btn btn-warning m-2",
                classNameIconAsc: "fas fa-sort-alpha-down",
                classNameIconDesc: "fas fa-sort-alpha-down-alt",
            },
            {
                path: "release_date",
                labelAsc: "Oldest",
                labelDesc: "Newest",
                className: "sorting__button btn btn-primary m-2",
                classNameIconAsc: "fas fa-calendar-minus",
                classNameIconDesc: "fas fa-calendar-plus",
            },
            {
                path: "popularity",
                labelAsc: "Least Popular",
                labelDesc: "Most Popular",
                className: "sorting__button btn btn-danger m-2",
                classNameIconAsc: "fas fa-sort-amount-down-alt",
                classNameIconDesc: "fas fa-sort-amount-down",
            },
            {
                path: "vote_average",
                labelAsc: "Worst Rating",
                labelDesc: "Best Rating",
                className: "sorting__button btn btn-dark m-2",
                classNameIconAsc: "fas fa-sort-numeric-down",
                classNameIconDesc: "fas fa-sort-numeric-down-alt",
            },
        ];
        return (
            <>
                <Poster />
                <Sort
                    sorts={sorts}
                    sortColumn={sortColumn}
                    onSort={this.handleSorting}
                />
                <SearchBox
                    value={searchQuery}
                    onChange={this.handleSearching}
                />
                <Movies
                    searchQuery={searchQuery}
                    movies={sorted}
                    imageURL={`${imageBaseURL}${posterSize}`}
                />
                <LoadButton
                    searchQuery={searchQuery}
                    isLoading={isLoading}
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
        this.setState({ isLoading: true });
        let { data } = await axios.get(
            `${apiURL}movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`
        );
        this.setState({
            movies: [...this.state.movies, ...data.results],
            currentPage: currentPage + 1,
            isLoading: false,
        });
    };
    handleSorting = (sortColumn) => {
        this.setState({ sortColumn });
    };
}

export default Home;
