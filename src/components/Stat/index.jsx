import "./style.scss";
function Stat({ title, value, icon }) {
  return (
    <div className="Stat">
      <img src={icon} alt={title} />
      <div className="info">
        <p>{title}</p>
        <h3>{value}</h3>
      </div>
    </div>
  );
}

export default Stat;
