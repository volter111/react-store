import { Route, BrowserRouter, Routes } from "react-router-dom";
import Favourites from "./components/Favourites";
import Listing from "./components/Listing";
import { useState, useMemo, useEffect } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [cartIds, setCartIds] = useState([]); // ID's
  const [favIds, setFavIds] = useState([]); // ID's

  const cartItems = useMemo(
    () => cartIds.map((item) => items.find((i) => i.itemId === item.itemId)),
    [items, cartIds]
  );

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price, 0),
    [cartItems]
  );

  // const favItems = useMemo(
  //   () =>
  //     favItems.reduce((itemsArr, obj) => {
  //       itemsArr.push(obj.itemId);
  //       return itemsArr;
  //     }, []),
  //   [favItems]
  // );

  useEffect(() => {
    Promise.all([
      axios
        .get("https://623a304abbe20c3f66d01e15.mockapi.io/items")
        .catch((error) => [alert(error)]),

      axios
        .get("https://623a304abbe20c3f66d01e15.mockapi.io/cart")
        .catch((error) => [alert(error)]),

      axios
        .get("https://623a304abbe20c3f66d01e15.mockapi.io/fav")
        .catch((error) => [alert(error)]),
    ]).then(([itemsResponse, cartIdsReponse, favItemsResponse]) => {
      setItems(itemsResponse.data);
      setCartIds(cartIdsReponse.data);
      // setFavItems(favItemsResponse.data);
    });
  }, [setCartIds]);

  const openOrCloseCart = () => {
    setCartOpened(!cartOpened);
  };

  const removeFromCart = async (id) => {
    try {
      await axios.delete(
        `https://623a304abbe20c3f66d01e15.mockapi.io/cart/${id}`
      );
      setCartIds((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert(error);
    }
  };


  return (
    <BrowserRouter>
      <div className="wrapper clear">
        <Header totalPrice={totalPrice} openOrCloseCart={openOrCloseCart} />
        {cartOpened && (
          <Cart
            items={cartItems}
            closeCart={openOrCloseCart}
            onDelete={removeFromCart}
            totalPrice={totalPrice}
          />
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Listing
                items={items}
                setCartItems={setCartIds}
                // favItems={favItems}
                cartIds={cartIds}
                favIds={favIds}
              />
            }
          />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
