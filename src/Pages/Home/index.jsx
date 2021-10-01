import Stat from "../../components/Stat";
import "./styles.scss";
function Home() {
  return (
    <div className="Home">
      <div className="container">
        <div className="global-stat">
          <h1>Global Statistics</h1>
          <div className="stat-row">
            <Stat
              title="Total Crytocurrencies"
              value={5}
              icon="https://img.icons8.com/emoji/48/000000/coin-emoji.png"
            />
            <Stat
              title="Total Exchanges"
              value={5}
              icon="https://img.icons8.com/fluency/48/000000/exchange-bitcoin.png"
            />

            <Stat
              title="Total Market Cap"
              value={5}
              icon="https://img.icons8.com/color-glass/48/000000/graph.png"
            />
            <Stat
              title="Total 24h Volume"
              value={5}
              icon="https://img.icons8.com/external-itim2101-flat-itim2101/64/000000/external-open-24-hours-time-management-itim2101-flat-itim2101.png"
            />
            <Stat
              title="Total Markets"
              value={5}
              icon="https://img.icons8.com/nolan/64/total-sales-1.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
