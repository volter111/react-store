import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    fetch("https://623a304abbe20c3f66d01e15.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });
  }, []);

  const openOrCloseCart = () => {
    setCartOpened(!cartOpened);
  };

  const clickOnAdd = (obj) => {
    setCartItems(prev => [...prev, obj]) // push new selected item to previous cartItems arr
  }

  console.log(cartItems)
  

  return (
    <div className="wrapper clear">
      {/* side-cart */}
      {cartOpened ? <Cart items={cartItems} closeCart={openOrCloseCart} /> : null}

      {/* header */}
      <Header openCart={openOrCloseCart} />

      {/* content */}
      <div className="content p-40">
        {/* search-block */}
        <div className="d-flex justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="d-flex justify-center search-block">
            <img className="searchSVG" src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        {/* body cards */}
        <div className="sneakers d-flex flex-wrap ">
          {items.map((sneaker, index) => {
            return (
              <Card
                key={index}
                title={sneaker.title}
                price={sneaker.price}
                imgURL={sneaker.imgURL}
                clickOnFavBtn={() => {
                  alert("Добавлено в закладки");
                }}
                addToCart={clickOnAdd}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
