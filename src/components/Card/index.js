import cardStyles from "./Card.module.scss";

const Card = ({ sneaker, addToFav, addToCart, isAdded, isFavourited }) => {
  
  const favBtnAction = () => {
    addToFav(sneaker);
  };

  const addToCartBtn = () => {
    addToCart(sneaker);
  };

  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.likeButton}>
        <img
          onClick={favBtnAction}
          src={isFavourited ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
          alt="unliked"
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
          onClick={addToCartBtn}
          src={isAdded ? "/img/selected.svg" : "/img/unselected.svg"}
          alt="btnCheck"
        />
      </div>
    </div>
  );
};

export default Card;
