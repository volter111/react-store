import Card from "./Card";

const Home = (props) => {
  return (
    <div className="content p-40">
      {/* search-block */}
      <div className="d-flex justify-between mb-40">
        <h1>
          {props.searchText
            ? `Search by: "${props.searchText}"`
            : "All sneakers"}
        </h1>
        <div className="d-flex justify-center search-block">
          <img className="searchSVG" src="/img/search.svg" alt="search" />

          {props.searchText ? (
            <img
              onClick={() => props.setSearchText("")}
              className="eraseText"
              src="/img/delete.svg"
              alt="close"
            />
          ) : null}

          <input
            onChange={props.getSearchText}
            value={props.searchText}
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* body cards */}
      <div className="sneakers d-flex flex-wrap ">
        {props.items
          .filter((item) =>
            item.title.toLowerCase().includes(props.searchText.toLowerCase())
          )
          .map((sneaker, index) => {
            return (
              <Card
                key={index}
                title={sneaker.title}
                price={sneaker.price}
                imgURL={sneaker.imgURL}
                addToCart={props.clickOnAdd}
                addToFav={props.clickOnFav}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Home;
