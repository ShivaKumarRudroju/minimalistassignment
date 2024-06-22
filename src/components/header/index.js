import Navbar from "../navbar";
import Body from "../body";
import "./index.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <Navbar />
        <div className="heading-container">
          <h1 className="heading">
            The choice is yours.
            <br /> Because they don’t have one.
          </h1>
          <div>
            <button className="quick-btn">QUICK VIEW</button>
          </div>
        </div>
      </div>
      <Body />
    </>
  );
};
export default Header;
