import { useEffect, useState } from "react";
import cardStyles from "./Card.module.scss";

const Card = ({ imgURL, title, price, addToFav, addToCart }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isFav, setIsFav] = useState(false);

  const likeBtn = () => {
    setIsFav(!isFav);
    addToFav({ title, imgURL, price });
  };

  const addToCartBtn = () => {
    setIsSelected(!isSelected);
    addToCart({ title, imgURL, price });
  };

  useEffect(() => {
    console.log("isSelected has been changed");
  }, [isSelected]);

  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.likeButton}>
        <img
          onClick={likeBtn}
          src={isFav ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"}
          alt="unliked"
        />
      </div>

      <img width={133} height={112} src={imgURL} alt="sneakerPhoto" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>${price}</b>
        </div>

        <img
          className={cardStyles.btnSelect}
          onClick={addToCartBtn}
          src={isSelected ? "/img/selected.svg" : "/img/unselected.svg"}
          alt="btnCheck"
        />
      </div>
    </div>
  );
};

export default Card;
