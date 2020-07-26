import React from "react";

const SearchBox = ({ value, onChange }) => {
    return (
        <>
            <nav className="navbar searchbox">
                <input
                    className="form-control m-3"
                    type="search"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Search for your Favorite Movie..."
                />
            </nav>
        </>
    );
};

export default SearchBox;
