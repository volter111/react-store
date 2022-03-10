function App() {
  return (
    <div className="wrapper clear">
      {/* side-cart */}
      <div className="overlay d-flex flex-column">
        <div className="right-cart d-flex flex-column">
          <h1 className="mb-20 d-flex justify-between">Cart: <img
                className="delete-btn"
                width="10%"
                src="/img/delete.svg"
                alt="delete"
              /></h1>

          <div className="items">
            <div className="cartItem d-flex align-center justify-between mb-20">
              <img
                className="mr-20"
                width="45%"
                src="/img/sneakers/example-3.jpg"
                alt="sneakers"
              />
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>$150</b>
              </div>
              <img
                className="delete-btn"
                width="15%"
                src="/img/delete.svg"
                alt="delete"
              />
            </div>

            <div className="cartItem d-flex align-center justify-between mb-20">
              <img
                className="mr-20"
                width="45%"
                src="/img/sneakers/example-1.jpg"
                alt="sneakers"
              />
              <div className="mr-20">
                <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>$150</b>
              </div>
              <img
                className="delete-btn"
                width="15%"
                src="/img/delete.svg"
                alt="delete"
              />
            </div>
          </div>

          <ul className="cartTotalBlock">
            <li className="d-flex justify-between">
              <span>Total:</span>
              <div></div>
              <b>$150</b>
            </li>

            <li className="d-flex justify-between">
              <span>Tax 5%:</span>
              <div></div>
              <b>$7.5</b>
            </li>
          </ul>

          <button className="buyItemsBtn">Buy items ➞</button>

        </div>
      </div>

      {/* header */}
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img className="logoImg" src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React sneakers</h3>
            <p className="opacity-5">The best sneakers</p>
          </div>
        </div>
        <div>
          <ul className="d-flex">
            <li className="mr-30">
              <img className="cartSVG" src="/img/cart.svg" alt="logo" />
              <span>$150</span>
            </li>
            <li>
              <img className="userSVG" src="/img/user.svg" alt="logo" />
            </li>
          </ul>
        </div>
      </header>

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
          <div className="card">
            <div className="favorite">
              <img src="/img/heart-unliked.svg" alt="unliked" />
            </div>

            <img
              width={133}
              height={112}
              src="/img/sneakers/example-1.jpg"
              alt=""
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>$125</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/example-2.jpg"
              alt=""
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>$125</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/example-3.jpg"
              alt=""
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>$125</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/example-4.jpg"
              alt=""
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>$125</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
