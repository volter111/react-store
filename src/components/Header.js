import { Link } from "react-router-dom";

const Header = ({ totalPrice, openOrCloseCart }) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <Link to="/">
          <img className="logoImg" src="/img/logo.png" alt="logo" />
        </Link>

        <div>
          <h3 className="text-uppercase">React sneakers</h3>
          <p className="opacity-5">The best sneakers</p>
        </div>
      </div>
      <div>
        <ul className="d-flex align-center">
          <li className="mr-30 d-flex align-center">
            <Link to="/favourites">
              <img
                className="cartSVG d-flex align-center cu-p"
                src="/img/favBtn.svg"
                alt="fav"
              />
            </Link>
            <img
              className="cartSVG cu-p"
              onClick={openOrCloseCart}
              src="/img/cart.svg"
              alt="cart"
            />
            <span>${totalPrice}</span>
          </li>
          <li className="d-flex align-center">
            <img className="userSVG" src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
