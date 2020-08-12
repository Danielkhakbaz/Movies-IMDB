import React from "react";

const Sort = ({ sortColumn, onSort }) => {
    const sorts = [
        {
            path: "",
            labelAsc: "Default",
            labelDesc: "Default",
            className: "btn btn-info m-2",
            classNameIconDesc: "fas fa-redo",
        },
        {
            path: "title",
            labelAsc: "A to Z",
            labelDesc: "Z to A",
            className: "btn btn-warning m-2",
            classNameIconAsc: "fas fa-sort-alpha-down",
            classNameIconDesc: "fas fa-sort-alpha-down-alt",
        },
        {
            path: "release_date",
            labelAsc: "Oldest",
            labelDesc: "Newest",
            className: "btn btn-primary m-2",
            classNameIconAsc: "fas fa-calendar-minus",
            classNameIconDesc: "fas fa-calendar-plus",
        },
        {
            path: "popularity",
            labelAsc: "Least Popular",
            labelDesc: "Most Popular",
            className: "btn btn-danger m-2",
            classNameIconAsc: "fas fa-sort-amount-down-alt",
            classNameIconDesc: "fas fa-sort-amount-down",
        },
        {
            path: "vote_average",
            labelAsc: "Worst Rating",
            labelDesc: "Best Rating",
            className: "btn btn-dark m-2",
            classNameIconAsc: "fas fa-sort-numeric-down",
            classNameIconDesc: "fas fa-sort-numeric-down-alt",
        },
    ];
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
            <div className="container-fluid">
                <div className="row">
                    <div className="sorting col-lg-12 col-md-12 col-sm-12 col-12">
                        {sorts.map((sort) => (
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
                                <h6>
                                    {sortColumn.path === sort.path &&
                                    sortColumn.order === "asc"
                                        ? sort.labelAsc
                                        : sort.labelDesc}
                                </h6>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sort;
