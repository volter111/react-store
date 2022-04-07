import cardStyles from "./Card.module.scss";

const Card = ({
  sneaker,
  addToFav,
  addToCart,
  isAdded,
  isFavourited,
  removeFromCart,
  removeFromFav,
}) => {
  const favBtnAction = (bool) => {
    bool ? removeFromFav(sneaker.id) : addToFav(sneaker);
  };

  const addToCartBtnAction = (bool) => {
    bool ? removeFromCart(sneaker.id) : addToCart(sneaker);
  };

  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.likeButton}>
        <img className={cardStyles.favImg}
          onClick={() => favBtnAction(isFavourited)}
          src={isFavourited ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
          alt="favourite"
        />
      </div>

      <img width={133} height={112} src={sneaker.imgURL} alt="sneakerPhoto" />
      <h5>{sneaker.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>${sneaker.price}</b>
        </div>

        <img
          className={cardStyles.btnSelect}
          onClick={() => addToCartBtnAction(isAdded)}
          src={isAdded ? "/img/selected.svg" : "/img/unselected.svg"}
          alt="btnCheck"
        />
      </div>
    </div>
  );
};

export default Card;
