import cardStyles from "./Card.module.scss"


const Card = (props) => {
  const onClickButton = () => {
    alert(123);
  };

  return (
    <div className={cardStyles.card}>
      <div className={cardStyles.likeButton}>
        <img src="/img/heart-unliked.svg" alt="unliked" />
      </div>

      <img width={133} height={112} src={props.imgURL} alt="" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>${props.price}</b>
        </div>
        <button className="button" onClick={onClickButton}>
          <img width={11} height={11} src="/img/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Card;
