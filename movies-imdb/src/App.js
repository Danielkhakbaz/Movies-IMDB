import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Components/Main/Header/Header";
import Home from "./Components/Main/Home/Home";
import MoviePage from "./Components/Main/MoviePage/MoviePage";
import NotFound from "./Components/Main/NotFound/NotFound";
import Footer from "./Components/Main/Footer/Footer";

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/Movies/:id" component={MoviePage} />
                <Route path="/Movies" component={Home} />
                <Route path="/NotFound" component={NotFound} />
                <Redirect exact from="/" to="/Movies" />
                <Redirect to="/NotFound" />
            </Switch>
            <Footer />
        </>
    );
};

export default App;
