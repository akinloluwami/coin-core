import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home";
import Coins from "./Pages/Coins";
import Exchanges from "./Pages/Exchanges";
import CoinDetails from "./Pages/CoinDetails";
import News from "./Pages/News";
import Navbar from "./components/Navbar";
import MobileNav from "./components/Navbar/MobileNav";
function App() {
  return (
    <div className="app">
      <Navbar />
      <MobileNav />
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
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/coin/:coinId">
          <CoinDetails />
        </Route>
      </Switch>
      <h4 style={{ fontSize: "100px" }}>CoinCore</h4>
    </div>
  );
}

export default App;
