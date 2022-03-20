import Card from "./components/Card";
import Header from "./components/Header";
import Cart from "./components/Cart";

const sneakers = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 155,
    imgURL: "/img/sneakers/example-1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 100,
    imgURL: "/img/sneakers/example-2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 50,
    imgURL: "/img/sneakers/example-3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 75,
    imgURL: "/img/sneakers/example-4.jpg",
  },
];

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
          {sneakers.map((sneaker) => {
            return (
              <Card
                title={sneaker.title}
                price={sneaker.price}
                imgURL={sneaker.imgURL}
                onClickFav={() => {
                  alert("Добавлено в закладки");
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
