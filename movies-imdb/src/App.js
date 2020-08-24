import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/Main/Header/Header";
import Home from "./Components/Main/Home/Home";
import MoviePage from "./Components/Main/MoviePage/MoviePage";
import Footer from "./Components/Main/Footer/Footer";
import NotFound from "./Components/Main/NotFound/NotFound";

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/Movies/:id" component={MoviePage} />
                <Route path="/Movies" component={Home} />
                <Route path="/NotFound/404" component={NotFound} />
                <Redirect exact from="/" to="/Movies" />
                <Redirect to="/NotFound/404" />
            </Switch>
            <Footer />
        </>
    );
};

export default App;
