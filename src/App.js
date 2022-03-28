import { Route, BrowserRouter, Routes } from "react-router-dom";
import Favourites from "./components/Favourites";
import Listing from "./components/Listing";
import { useState, useMemo, useEffect } from "react";
import Header from "./components/Header";
import Cart from "./components/Cart";
import axios from "axios";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState([]);
  const [favItems, setFavItesm] = useState([]);

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price, 0),
    [cartItems]
  );

  const removeFromCart = async (id, price) => {
    try {
      await axios.delete(
        `https://623a304abbe20c3f66d01e15.mockapi.io/cart/${id}`
      );
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    Promise.all([
      axios
        .get("https://623a304abbe20c3f66d01e15.mockapi.io/items")
        .catch(() => []),
      axios
        .get("https://623a304abbe20c3f66d01e15.mockapi.io/cart")
        .catch(() => []),
    ]).then(([itemsRes, cartItemsRes]) => {
      setItems(itemsRes.data);
      setCartItems(cartItemsRes.data);
    });
  }, [setCartItems]);

  const openOrCloseCart = () => {
    setCartOpened(!cartOpened);
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
              <Listing items={items} setCartItems={setCartItems} favItems={favItems} />
            }
          />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
