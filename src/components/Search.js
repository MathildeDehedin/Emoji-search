import React from "react";
const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h1>Emoji Search</h1>
      <input
        type="text"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
    </div>
  );
};
export default Search;
