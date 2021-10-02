import "./styles.scss";
function NewsCard({ url, name, image, published }) {
  return (
    <a
      className="news-card"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="title-img">
        <h4>{name}</h4>
        <img src={image} alt="" />
      </div>
      <p>{published}</p>
    </a>
  );
}

export default NewsCard;
