import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import axios from "axios";

// const sneakers = [
//   {
//     title: "Мужские Кроссовки Nike Blazer Mid Suede",
//     price: 155,
//     imgURL: "/img/sneakers/1.jpg",
//   },
//   {
//     title: "Мужские Кроссовки Nike Air Max 270",
//     price: 100,
//     imgURL: "/img/sneakers/2.jpg",
//   },
//   {
//     title: "Мужские Кроссовки Nike Blazer Mid Suede",
//     price: 50,
//     imgURL: "/img/sneakers/3.jpg",
//   },
//   {
//     title: "Кроссовки Puma X Aka Boku Future Rider",
//     price: 75,
//     imgURL: "/img/sneakers/4.jpg",
//   },
// ];

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  // const [favItems, setFavItesm] = useState([]);
  

  useEffect(() => {}, [cartItems]);


  useEffect(() => {
    axios
      .get("https://623a304abbe20c3f66d01e15.mockapi.io/items")
      .then((res) => setItems(res.data));

    axios
      .get("https://623a304abbe20c3f66d01e15.mockapi.io/cart")
      .then((res) => setCartItems(res.data));
  }, []);

 

  const openOrCloseCart = () => {
    setCartOpened(!cartOpened);
  };

  const clickOnFav = (obj) => {
    axios.post("https://623a304abbe20c3f66d01e15.mockapi.io/fav", obj);
    setCartItems((prev) => [...prev, obj]); // push new selected item to previous favItems arr
  };

  const clickOnAdd = (obj) => {
    axios.post("https://623a304abbe20c3f66d01e15.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]); // push new selected item to previous cartItems arr
    setTotalPrice(totalPrice + obj.price);
  };

  const removeFromCart = async (id, price) => {
    await axios.delete(
      `https://623a304abbe20c3f66d01e15.mockapi.io/cart/${id}/`
    );
    setTotalPrice(totalPrice - price);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const getSearchText = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {/* side-cart */}
      {cartOpened ? (
        <Cart
          items={cartItems}
          closeCart={openOrCloseCart}
          onDelete={removeFromCart}
          totalPrice={totalPrice}
        />
      ) : null}

      {/* header */}
      <Header totalPrice={totalPrice} openCart={openOrCloseCart} />

      {/* content */}
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
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((sneaker, index) => {
              return (
                <Card
                  key={index}
                  title={sneaker.title}
                  price={sneaker.price}
                  imgURL={sneaker.imgURL}
                  addToCart={clickOnAdd}
                  addToFav={clickOnFav}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
