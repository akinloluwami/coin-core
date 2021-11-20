import "./mobile-nav.scss";
import { Link } from "react-router-dom";
function MobileNav() {
  return (
    <div className="mobile-nav">
      <Link to="/">
        <img
          src="https://img.icons8.com/flat-round/50/000000/home.png"
          alt=""
        />{" "}
        Home{" "}
      </Link>
      <Link to="/coins">
        <img src="https://img.icons8.com/office/64/000000/bitcoin.png" alt="" />{" "}
        Coins
      </Link>
      <Link to="/exchanges">
        <img
          src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-exchange-cryptocurrency-vitaliy-gorbachev-blue-vitaly-gorbachev.png"
          alt=""
        />
        Exchanges
      </Link>
      <Link to="/news">
        <img src="https://img.icons8.com/fluency/48/000000/news.png" alt="" />{" "}
        News
      </Link>
    </div>
  );
}

export default MobileNav;
