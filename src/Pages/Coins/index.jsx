import { useState } from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import { useGetCoinsQuery } from "../../services/cryptoApi";
import Card from "../../components/Card";
function Coins() {
  const { data: cryptosList, isFetching } = useGetCoinsQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data.coins);
  return (
    <>
      {cryptos.map((coin) => (
        <Card />
      ))}
    </>
  );
}

export default Coins;
