const Cart = ({ closeCart, onDelete, totalPrice, items = [] }) => {
  return (
    <div>
      {items.length > 0 ? (
        <div className="overlay d-flex flex-column">
          <div className="right-cart d-flex flex-column">
            <h1 className="mb-20 d-flex justify-between">
              Cart:
              <img
                onClick={closeCart}
                className="delete-btn"
                width="10%"
                src="/img/delete.svg"
                alt="close"
              />
            </h1>
            <div className="items">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="cartItem d-flex align-center justify-between mb-20"
                >
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
                    onClick={() => onDelete(item.id)}
                  />
                </div>
              ))}
            </div>

            <ul className="cartTotalBlock">
              <li className="d-flex justify-between">
                <span>Total:</span>
                <b>${totalPrice}</b>
              </li>

              <li className="d-flex justify-between">
                <span>Tax 5%:</span>
                <div></div>
                <b>${(totalPrice * 0.05).toFixed(2)}</b>
              </li>
            </ul>
            <button className="buyItemsBtn">Buy items ➞</button>
          </div>
        </div>
      ) : (
        <div>
          <div className="overlay d-flex flex-column">
            <div className="right-cart d-flex flex-column justify-center align-center">
              <h1> Your cart is empty :( </h1>
              <img
                className="emptyCart"
                src="/img/emptyCart.svg"
                alt="Empty Cart"
              />
              <button onClick={closeCart} className="backToTheStore">
                🠔 Back to the store
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
