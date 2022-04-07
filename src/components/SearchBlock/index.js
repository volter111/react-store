import searchStyles from "./SearchBlock.module.scss";

const SearchBlock = ({ searchText, setSearchText, getSearchText }) => {
  return (
    <div className="d-flex align-center justify-between mr-40 ml-40 mt-30">
      <h1 className="titleText">
        {searchText ? `Search by: "${searchText}"` : "All sneakers"}
      </h1>
      <div className={searchStyles.search_block}>
        <img className="searchSVG" src="/img/search.svg" alt="search" />

        <input
          onChange={getSearchText}
          value={searchText}
          type="text"
          placeholder="Search..."
        />

        {searchText ? (
          <img
            onClick={() => setSearchText("")}
            className={searchStyles.eraseText}
            src="/img/delete.svg"
            alt="close"
          />
        ) : null}
      </div>
    </div>
  );
};

export default SearchBlock;
