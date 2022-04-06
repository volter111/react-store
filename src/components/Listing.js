import { useState } from "react";
import axios from "axios";
import Home from "./Home";

function Listing({ setCartItems, setFavItems, items, cartIds, favIds }) {
  const [searchText, setSearchText] = useState("");

  const clickOnAdd = async (obj) => {
    await axios.post("http://localhost:3004/cartIds/", { id: obj.id });
    setCartItems((prev) => [...prev, { id: obj.id }]);
    console.log(obj);
  };

  const clickOnFav = async (obj) => {
    await axios.post("http://localhost:3004/favIds/", { id: obj.id });
    setFavItems((prev) => [...prev, { id: obj.id }]);
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
      setSearchText={setSearchText}
      cartIds={cartIds}
      favIds={favIds}
    />
  );
}

export default Listing;
