import { useMemo } from "react";

function Listing({
  items,
  searchText,
  clickOnAdd,
  clickOnFav,
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

export default Listing;
