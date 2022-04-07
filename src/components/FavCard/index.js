import cardStyles from "./Card.module.scss";

const FavCard = ({ sneaker, removeFromFav }) => {
  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.likeButton}></div>
      <img width={133} height={112} src={sneaker.imgURL} alt="sneakerPhoto" />
      <h5>{sneaker.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>${sneaker.price}</b>
        </div>
        <img
          className={cardStyles.btnDelete}
          src="./img/delete.svg"
          alt="deleteFromFav"
          onClick={() => removeFromFav(sneaker.id)}
        />
      </div>
    </div>
  );
};

export default FavCard;
