import React from "react";

const SearchBox = ({ Value, OnChange }) => {
    return (
        <>
            <nav className="navbar SearchBox">
                <input
                    className="form-control m-3"
                    type="search"
                    value={Value}
                    onChange={(e) => OnChange(e.target.value)}
                    placeholder="Search for your Favorite Movie..."
                />
            </nav>
        </>
    );
};

export default SearchBox;
