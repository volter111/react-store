import { Link } from "react-router-dom";

import favStyles from "./Favourites.module.scss";

function Favourites({ favItems, removeFromFav, card: Card }) {
  return (
    <div className="content p-40">
      {favItems.length > 0 ? (
        <div className="sneakers d-flex flex-wrap ">
          {favItems.map((sneaker) => {
            return (
              <Card
                removeFromFav={removeFromFav}
                sneaker={sneaker}
                key={sneaker.id}
              />
            );
          })}
        </div>
      ) : (
        <div className={favStyles.empty_favs}>
          <h2>No fav items :(</h2>
          <img src="./img/no-favs.png" alt="" />
          <Link className={favStyles.link} to="/">
            <button className={favStyles.backToTheStore}>
              🠔 Back to the store
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Favourites;
