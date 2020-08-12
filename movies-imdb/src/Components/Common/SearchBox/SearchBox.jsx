import React from "react";

const SearchBox = ({ value, onChange }) => {
    return (
        <>
            <nav className="searchbox navbar">
                <input
                    className="form-control m-3"
                    type="search"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Search for Movies..."
                />
            </nav>
        </>
    );
};

export default SearchBox;
