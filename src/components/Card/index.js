import { useState } from "react";
import cardStyles from "./Card.module.scss";
// Card component

const Card = (props) => {
  const [isSelected, setIsSelected] = useState(false);

  const btnSelect = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.likeButton}>
        <img
          src="/img/heart-unliked.svg"
          alt="unliked"
          onClick={props.onClickFav}
        />
      </div>

      <img width={133} height={112} src={props.imgURL} alt="sneakerPhoto" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>${props.price}</b>
        </div>

        <img
          className={cardStyles.btnSelect}
          onClick={btnSelect}
          src={isSelected ? "/img/selected.svg" : "/img/unselected.svg"}
          alt="btnCheck"
        />
      </div>
    </div>
  );
};

export default Card;
