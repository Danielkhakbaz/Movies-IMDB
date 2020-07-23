import React, { Component } from "react";
import Poster from "../Poster/Poster";
import SearchBox from "../../Common/SearchBox/SearchBox";
import Movies from "../../Main/Movies/Movies";
import { ApiURL, ApiKEY, ImageBaseURL, PosterSize } from "../../../Config.json";
import axios from "axios";

class Home extends Component {
    state = {
        Movies: [],
        SearchQuery: "",
    };
    async componentDidMount() {
        const { Movies } = this.state;
        for (let i = 1; i <= 4; i++) {
            if (i !== 2) {
                let { data } = await axios.get(
                    `${ApiURL}movie/popular?api_key=${ApiKEY}&language=en-US&page=${i}`
                );
                if (Movies.length !== 0) {
                    this.setState({
                        Movies: [...Movies, ...data.results],
                    });
                } else {
                    this.setState({ Movies: data.results });
                }
            }
        }
    }
    render() {
        const { SearchQuery } = this.state;
        const { Searched } = this.SearchEngine();
        return (
            <>
                <Poster />
                <SearchBox
                    Value={SearchQuery}
                    OnChange={this.HandleSearching}
                />
                <Movies
                    SearchQuery={SearchQuery}
                    Movies={Searched}
                    ImageURL={`${ImageBaseURL}${PosterSize}`}
                />
            </>
        );
    }
    SearchEngine = () => {
        const { Movies, SearchQuery } = this.state;
        let Searched = Movies;
        if (SearchQuery) {
            window.scrollTo(0, 500);
        }
        if (SearchQuery) {
            Searched = Movies.filter((Movie) =>
                Movie.title.toLowerCase().startsWith(SearchQuery.toLowerCase())
            );
        }
        return { Searched };
    };
    HandleSearching = (Query) => {
        this.setState({ SearchQuery: Query });
    };
}

export default Home;
