import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./Home";

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

function Listing({
  setCartItems,
  setFavItesm,
  items,
}) {
  
  const [searchText, setSearchText] = useState("");

  

  const clickOnFav = async (obj) => {
    await axios.post("https://623a304abbe20c3f66d01e15.mockapi.io/fav", obj.itemId);
    setFavItesm((prev) => [...prev, obj]); // push new selected item to previous favItems arr
  };

  const clickOnAdd = async (obj) => {
    await axios.post(
      "https://623a304abbe20c3f66d01e15.mockapi.io/cart",
      obj.itemId
    );
    setCartItems((prev) => [...prev, obj.itemId]); // push new selected item to previous cartItems arr
  };

  const getSearchText = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <Home
      items={items}
      searchText={searchText}
      clickOnAdd={clickOnAdd}
      clickOnFav={clickOnFav}
      getSearchText={getSearchText}
    />
  );
}

export default Listing;
