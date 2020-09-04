import React from "react";
import PropTypes from "prop-types";

const Sort = ({ sortingMovies, sortColumn, onSort }) => {
    const handleSort = (column) => {
        if (sortColumn.path === column) {
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        } else {
            sortColumn.path = column;
            sortColumn.order = "desc";
        }
        onSort(sortColumn);
    };

    return (
        <>
            <section className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 sorting">
                        {sortingMovies.map((sort) => (
                            <button
                                className={sort.className}
                                key={sort.path}
                                onClick={() => handleSort(sort.path)}
                            >
                                <i
                                    className={
                                        sort.path !== "" &&
                                        sortColumn.path === sort.path &&
                                        sortColumn.order === "asc"
                                            ? sort.classNameIconAsc
                                            : sort.classNameIconDesc
                                    }
                                />
                                <h6 className="sorting__title">
                                    {sortColumn.path === sort.path &&
                                    sortColumn.order === "asc"
                                        ? sort.labelAsc
                                        : sort.labelDesc}
                                </h6>
                            </button>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

Sort.propTypes = {
    sortingMovies: PropTypes.array.isRequired,
    sortColumn: PropTypes.object.isRequired,
    onSort: PropTypes.func.isRequired,
};

export default Sort;
