import React from "react";

const SearchBar = ({ value, onChange }) => {
    return (
        <>
            <nav className="navbar searchbar__nav">
                <input
                    className="m-3 form-control input-group mr-sm-2"
                    name="query"
                    type="search"
                    value={value}
                    placeholder="Search for your Favourite Movie..."
                    onChange={(e) => onChange(e.currentTarget.value)}
                />
            </nav>
        </>
    );
};

export default SearchBar;
