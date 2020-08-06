import React from "react";

const Sort = ({ sortColumn, onSort }) => {
    const handleSort = (column) => {
        const allSortColumn = { ...sortColumn };
        if (sortColumn.path === column) {
            allSortColumn.order =
                allSortColumn.order === "asc" ? "desc" : "asc";
        } else {
            allSortColumn.path = column;
            allSortColumn.order = "desc";
        }
        onSort(allSortColumn);
    };
    const handleIcons = () => {
        let titleIcon = "fas fa-sort-alpha-down";
        if (sortColumn.path === "title") {
            if (sortColumn.order === "desc") {
                titleIcon += "-alt";
            }
        }
        let popularityIcon = "fas fa-sort-amount-down-alt";
        if (sortColumn.path === "popularity") {
            if (sortColumn.order === "desc") {
                popularityIcon = "fas fa-sort-amount-down";
            }
        }
        let voteAverageIcon = "fas fa-sort-numeric-down";
        if (sortColumn.path === "vote_average") {
            if (sortColumn.order === "desc") {
                voteAverageIcon += "-alt";
            }
        }
        return { titleIcon, popularityIcon, voteAverageIcon };
    };
    const { titleIcon, popularityIcon, voteAverageIcon } = handleIcons();

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 sort">
                        <button
                            className="btn"
                            onClick={() => handleSort("title")}
                        >
                            <i className={titleIcon} />
                        </button>
                        <button
                            className="btn"
                            onClick={() => handleSort("popularity")}
                        >
                            <i className={popularityIcon} />
                        </button>
                        <button
                            className="btn"
                            onClick={() => handleSort("vote_average")}
                        >
                            <i className={voteAverageIcon} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sort;
