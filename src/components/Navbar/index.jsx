import { FiHome } from "react-icons/fi";
import { RiCopperCoinLine } from "react-icons/ri";
import { CgArrowsExchangeV } from "react-icons/cg";
import { IoNewspaperOutline } from "react-icons/io5";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link to="/">
          {" "}
          <h2>CoinCore</h2>
        </Link>
      </div>
      <div className="menu">
        <Link to="/">
          {" "}
          <FiHome />{" "}
          <img
            src="https://img.icons8.com/flat-round/50/000000/home.png"
            alt=""
          />{" "}
          Home{" "}
        </Link>
        <Link to="/coins">
          {" "}
          <RiCopperCoinLine />
          <img
            src="https://img.icons8.com/office/64/000000/bitcoin.png"
            alt=""
          />{" "}
          Coins
        </Link>
        <Link to="/exchanges">
          {" "}
          <CgArrowsExchangeV />{" "}
          <img src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/000000/external-exchange-cryptocurrency-vitaliy-gorbachev-blue-vitaly-gorbachev.png" />
          Exchanges
        </Link>
        <Link to="/news">
          {" "}
          <IoNewspaperOutline />{" "}
          <img src="https://img.icons8.com/fluency/48/000000/news.png" /> News
        </Link>{" "}
      </div>
    </div>
  );
}

export default Navbar;
