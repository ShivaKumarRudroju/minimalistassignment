import { useState } from "react";
import Footer from "../footer";
import "./index.css";
import Popup from "../popup";

const Body = () => {
  const [popup, setPopup] = useState(false);
  const handelPopup = () => {
    setPopup(true);
  };
  const handelView = () => {
    setPopup(true);
  };

  return (
    <>
      <div className="page">
        <div className="about">
          <div>
            <img
              src="https://res.cloudinary.com/dtll9buf5/image/upload/v1718996235/Frame_xfmzb9.png"
              className="frame"
              alt="frame1"
            />
          </div>

          <h1>About</h1>
          <div>
            <img
              src="https://res.cloudinary.com/dtll9buf5/image/upload/v1718996235/Frame_xfmzb9.png"
              className="frame"
              alt="frame2"
            />
          </div>
        </div>
        <div className="paragraph-container">
          {" "}
          <div>
            <img
              src="https://res.cloudinary.com/dtll9buf5/image/upload/v1718997928/Frame_1_lksp4w.png"
              alt="Frame_1_lksp4w"
            />
          </div>
          <p className="paragraph">
            Our products are crafted exclusively from the dreams and screams of
            young kids who wanted to show their mastery in their chosen fields,
            but were directed towards a factory for daily wages. Each cracker
            bursts brighter than their lost smiles, and can be heard louder than
            their cries for miles. Buy them, burst them, brag about them.
            <br />
            <span className="span">
              {" "}
              The choice is yours. Because they don’t have one.
            </span>
          </p>
          <div>
            <img
              src="https://res.cloudinary.com/dtll9buf5/image/upload/v1718997928/Frame_1_lksp4w.png"
              alt="Frame_1_lksp4w"
            />
          </div>
        </div>
        <div className="ourproducts-container">
          <div>
            <img
              src="https://res.cloudinary.com/dtll9buf5/image/upload/v1718996235/Frame_xfmzb9.png"
              className="frame"
              alt="frame1"
            />
          </div>

          <h1>Our Products</h1>
          <div>
            <img
              src="https://res.cloudinary.com/dtll9buf5/image/upload/v1718996235/Frame_xfmzb9.png"
              className="frame"
              alt="frame2"
            />
          </div>
        </div>
        <div className="card-container">
          <div className="card1">
            <img
              className="image1"
              src="https://res.cloudinary.com/dtll9buf5/image/upload/v1719034153/Frame_7_wpwqaj.png"
              alt="card1"
            />
            <div className="card-name1">
              <h1 className="headingname">Raju Rassibomb</h1>
              <div>
                <button className="card-button" onClick={handelView}>
                  QUICK VIEW
                </button>
              </div>
            </div>
          </div>
          <div className="card1">
            <img
              className="image1"
              src="https://res.cloudinary.com/dtll9buf5/image/upload/v1719034153/Frame_7_wpwqaj.png"
              alt="card1"
            />
            <div className="card-name1">
              <h1 className="headingname">Raju Rassibomb</h1>
              <div>
                <button className="card-button" onClick={handelPopup}>
                  QUICK VIEW
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="lineimage">
          <img src="https://res.cloudinary.com/dtll9buf5/image/upload/v1719035068/Frame_2_urxwro.png" />
        </div>
        {popup && <Popup setPopup={() => setPopup(false)} />}
      </div>
      <Footer />
    </>
  );
};
export default Body;
