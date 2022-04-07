import { Route, BrowserRouter, Routes } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Card from "./components/Card";
import FavCard from "./components/FavCard";
import axios from "axios";
import SearchBlock from "./components/SearchBlock";
import Listing from "./components/Listing";
import Favourites from "./components/Favourites";

// How to start:
//   json-server --watch items.json --port 3004
//   http://localhost:3004

// Resources:
//   http://localhost:3004/items
//   http://localhost:3004/favIds
//   http://localhost:3004/cartIds

function App() {
  const [items, setItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [cartIds, setCartIds] = useState([]); // ID's
  const [favIds, setFavIds] = useState([]); // ID's

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3004/items").catch((error) => alert(error)),

      axios.get("http://localhost:3004/cartIds").catch((error) => alert(error)),

      axios.get("http://localhost:3004/favIds").catch((error) => alert(error)),
    ]).then(([itemsResponse, cartIdsReponse, favItemsResponse]) => {
      setItems(itemsResponse.data);
      setCartIds(cartIdsReponse.data);
      setFavIds(favItemsResponse.data);
    });
  }, [setCartIds]);

  const cartItems = useMemo(
    () => cartIds.map((item) => items.find((el) => el.id === item.id)),
    [items, cartIds]
  );

  const favItems = useMemo(
    () => favIds.map((item) => items.find((el) => el.id === item.id)),
    [items, favIds]
  );

  console.log(favItems, "FavItems");

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price, 0),
    [cartItems]
  );

  const openOrCloseCart = () => {
    setCartOpened(!cartOpened);
  };

  const removeFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:3004/cartIds/${id}`);
      setCartIds((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert(error);
    }
  };

  const removeFromFav = async (id) => {
    try {
      await axios.delete(`http://localhost:3004/favIds/${id}`);
      setFavIds((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert(error);
    }
  };

  const [searchText, setSearchText] = useState("");

  const getSearchText = (event) => {
    setSearchText(event.target.value);
  };

  const clickOnAdd = async (obj) => {
    await axios.post("http://localhost:3004/cartIds/", { id: obj.id });
    setCartIds((prev) => [...prev, { id: obj.id }]);
    console.log(obj);
  };

  const clickOnFav = async (obj) => {
    await axios.post("http://localhost:3004/favIds/", { id: obj.id });
    setFavIds((prev) => [...prev, { id: obj.id }]);
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
              <>
                <SearchBlock
                  searchText={searchText}
                  getSearchText={getSearchText}
                  setSearchText={setSearchText}
                />
                <Listing
                  clickOnAdd={clickOnAdd}
                  clickOnFav={clickOnFav}
                  searchText={searchText}
                  card={Card}
                  items={items}
                  setCartItems={setCartIds}
                  setFavItems={setFavIds}
                  favItems={favItems}
                  cartIds={cartIds}
                  favIds={favIds}
                  removeFromCart={removeFromCart}
                  removeFromFav={removeFromFav}
                />
              </>
            }
          />
          <Route
            path="/favourites"
            element={
              <Favourites
                favItems={favItems}
                removeFromFav={removeFromFav}
                card={FavCard}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
