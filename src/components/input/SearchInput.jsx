import React from "react";
import "../../resources/styles/components/input/searchInput.scss";
import SearchIcon from "../icons/SearchIcon";

class SearchInput extends React.Component {
  render() {
    return (
      <div className="searchInput">
        <SearchIcon/>
        <input type="text" value="" placeholder="Search cats"/>
      </div>
    );
  }
}

export default SearchInput;