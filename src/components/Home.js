import Card from "./Card";

const Home = ({ items, searchText, clickOnAdd, clickOnFav, getSearchText, setSearchText, cartIds, favIds }) => {
  return (
    <div className="content p-40">
    
      {/* search-block */}
      <div className="d-flex justify-between mb-40">
        <h1>
          {searchText
            ? `Search by: "${searchText}"`
            : "All sneakers"}
        </h1>
        <div className="d-flex justify-center search-block">
          <img className="searchSVG" src="/img/search.svg" alt="search" />

          {searchText ? (
            <img
              onClick={() => setSearchText("")}
              className="eraseText"
              src="/img/delete.svg"
              alt="close"
            />
          ) : null}

          <input
            onChange={getSearchText}
            value={searchText}
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* body cards */}
      <div className="sneakers d-flex flex-wrap ">
        {items
          .filter((item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((sneaker, index) => {
            return (
              <Card
                sneaker={sneaker}
                key={index}
                addToCart={clickOnAdd}
                addToFav={clickOnFav}
                isAdded={cartIds.includes(sneaker.itemId)}
                isFavourited={favIds.includes(sneaker.itemId)}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
