const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/heart-unliked.svg" alt="unliked" />
      </div>

      <img width={133} height={112} src="/img/sneakers/example-1.jpg" alt="" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>$125</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Card;


