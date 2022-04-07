import { useMemo } from "react";

function Home({
  items,
  searchText,
  clickOnAdd,
  clickOnFav,
  getSearchText,
  setSearchText,
  cartIds,
  favIds,
  removeFromFav,
  removeFromCart,
  card: Card,
}) {
  const favIdsArr = useMemo(() => favIds.map((item) => item.id), [favIds]);
  const cartIdsArr = useMemo(() => cartIds.map((item) => item.id), [cartIds]);

  const filteredItems = useMemo(
    () =>
      items.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      ),
    [items, searchText]
  );

  return (
    <div className="content p-40">
      {/* search-block */}
      <div className="d-flex justify-between mb-40">
        <h1>{searchText ? `Search by: "${searchText}"` : "All sneakers"}</h1>
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
        {filteredItems.map((sneaker) => {
          return (
            <Card
              removeFromCart={removeFromCart}
              removeFromFav={removeFromFav}
              sneaker={sneaker}
              key={sneaker.id}
              addToCart={clickOnAdd}
              addToFav={clickOnFav}
              isAdded={cartIdsArr.includes(sneaker.id)}
              isFavourited={favIdsArr.includes(sneaker.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
