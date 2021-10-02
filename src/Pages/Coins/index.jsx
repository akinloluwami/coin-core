import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import { useGetCoinsQuery } from "../../services/cryptoApi";
import Card from "../../components/Card";
import Loading from "../../components/Loading";
import "./styles.scss";
function Coins({ simplified }) {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCoinsQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    const filteredData = cryptosList?.data.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);
  if (isFetching) return <Loading />;
  return (
    <>
      <div className="cryptocurrencies">
        {!simplified && (
          <div className="search-coin">
            <input
              placeholder="Search Cryptocurrency"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        )}

        <div className="coin-row">
          {cryptos?.map((coin) => (
            <Link to={`/coins/${coin.id}`}>
              <Card
                name={coin.name}
                rank={coin.rank}
                icon={coin.iconUrl}
                price={millify(coin.price)}
                marketCap={millify(coin.marketCap)}
                change={millify(coin.change)}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Coins;
