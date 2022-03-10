const Cart = () => {
  return (
    <div style={{ display: "none" }} className="overlay d-flex flex-column">
      <div className="right-cart d-flex flex-column">
        <h1 className="mb-20 d-flex justify-between">
          Cart:{" "}
          <img
            className="delete-btn"
            width="10%"
            src="/img/delete.svg"
            alt="delete"
          />
        </h1>

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
  );
};

export default Cart;
<div className="right-cart d-flex flex-column">
  <h1 className="mb-20 d-flex justify-between">
    Cart:{" "}
    <img
      className="delete-btn"
      width="10%"
      src="/img/delete.svg"
      alt="delete"
    />
  </h1>

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
</div>;
