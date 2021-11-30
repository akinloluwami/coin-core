import "./styles.scss";
function Card({ rank, name, icon, price, marketCap, change }) {
  return (
    <div className="card">
      <div className="name-icon">
        <p>
          {rank}. {name}
        </p>
        <img src={icon} alt={name} />
      </div>
      <p>Price: ${price}</p>
      <p>Market Cap: ${marketCap}</p>
      <p>Change: {change}%</p>
    </div>
  );
}

export default Card;
