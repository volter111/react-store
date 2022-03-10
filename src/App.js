import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="wrapper clear">
      {/* side-cart hidden */}
        <Cart />

      {/* header */}
      <Header />

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
        <div className="sneakers d-flex justify-between">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
