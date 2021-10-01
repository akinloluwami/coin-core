import { Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home";
import Coins from "./Pages/Coins";
import Exchanges from "./Pages/Exchanges";
import CoinDetails from "./Pages/CoinDetails";
import News from "./Pages/News";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/coins">
          <Coins />
        </Route>
        <Route exact path="/exchanges">
          <Exchanges />
        </Route>
        <Route exact path="/coin:coinId">
          <CoinDetails />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
