const Cart = ({closeCart, items = [] }) => {
  return (
    <div className="overlay d-flex flex-column">
      <div className="right-cart d-flex flex-column">
        <h1 className="mb-20 d-flex justify-between">
          Cart:
          <img
            onClick={ closeCart }
            className="delete-btn"
            width="10%"
            src="/img/delete.svg"
            alt="close"
          />
        </h1>
        <div className="items">
          { items.map((item, index) => (
            <div key={index} className="cartItem d-flex align-center justify-between mb-20">
              <img
                className="mr-20"
                width="45%"
                src={item.imgURL}
                alt="sneakers"
              />
              <div className="mr-20">
                <p className="mb-5">{item.title}</p>
                <b>${item.price}</b>
              </div>
              <img
                className="delete-btn"
                width="15%"
                src="/img/delete.svg"
                alt="delete"
              />
            </div>
          ))}
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
