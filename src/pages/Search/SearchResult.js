import React from "react";
import "./SearchResult.scss";
import { FilterFeature } from "./Dropdown";
import { SearchResultPagination } from "./index";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchResult(props) {
  const { type } = props;

  const district_code = useQuery().get("district_code");

  return (
    <div className="search_result_pagination">
      <div className="container">
        <div className="row">
          <FilterFeature />
          <SearchResultPagination code={district_code} />
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
