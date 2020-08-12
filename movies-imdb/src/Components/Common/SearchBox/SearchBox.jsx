import React from "react";
import PropTypes from "prop-types";

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

SearchBox.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SearchBox;
