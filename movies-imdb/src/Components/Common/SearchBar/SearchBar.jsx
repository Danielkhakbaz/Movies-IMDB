import React from "react";

const SearchBar = () => {
    return (
        <>
            <nav className="navbar searchbar__nav">
                <input
                    className="m-3 form-control input-group mr-sm-2"
                    type="search"
                    placeholder="Search for your Favourite Movie..."
                />
            </nav>
        </>
    );
};

export default SearchBar;
