import { useGetNewsQuery } from "../../services/cryptoNewsApi";
import Loading from "../../components/Loading";
import NewsCard from "../../components/NewsCard";
import "./styles.scss";
function News({ simplified }) {
  const { data: cryptoNews } = useGetNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 10 : 30,
  });
  const demoImage =
    "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";
  if (!cryptoNews?.value) return <Loading />;
  return (
    <>
      <div className="crypto-news">
        <div className="top-bar">
          {!simplified && <h1>Latest Crypto News</h1>}
        </div>

        <div className="news-row">
          {cryptoNews.value.map((news) => (
            <NewsCard
              url={news.url}
              name={news.name}
              image={news?.image?.thumbnail?.contentUrl || demoImage}
              // published={moment(news.datePublished).startOf("ss").fromNow()}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default News;
