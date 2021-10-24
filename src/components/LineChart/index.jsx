import { Line } from "react-chartjs-2";
function LineChart({ coinHistory, coinName, currentPrice }) {
  const coinPrice = [];
  const coinTimeStamp = [];
  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinTimeStamp.push(
      new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
      <div className="chart-header">
        {/* <h2 className="chart.title">{coinName}</h2> */}
        <div className="price-container">
          {/* <h5 className="price-change">{coinHistory?.data?.change}%</h5> */}
        </div>
      </div>
      <Line data={data} options={options} />
    </>
  );
}

export default LineChart;
