const Header = () => {
  return (
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
  );
};

export default Header;
