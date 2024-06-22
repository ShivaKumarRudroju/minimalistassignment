import { IoMdClose } from "react-icons/io";
import "./index.css";

const Popup = ({ setPopup }) => {
  const clearpopup = () => {
    setPopup(false);
  };
  return (
    <div className="popup">
      <div className="popupcard">
        <div className="popup-img">
          <img
            src="https://res.cloudinary.com/dtll9buf5/image/upload/v1719034153/Frame_7_wpwqaj.png"
            alt="img"
          />
          <div className="image-section">
            <img
              src="https://res.cloudinary.com/dtll9buf5/image/upload/v1719060259/Frame_7_jwb2q8.png"
              className="img"
              alt="img"
            />
            <img
              src="https://res.cloudinary.com/dtll9buf5/image/upload/v1719060259/Frame_7_jwb2q8.png"
              className="img"
              alt="img"
            />
            <img
              src="https://res.cloudinary.com/dtll9buf5/image/upload/v1719060259/Frame_7_jwb2q8.png"
              className="img"
              alt="img"
            />
            <img
              src="https://res.cloudinary.com/dtll9buf5/image/upload/v1719060259/Frame_7_jwb2q8.png"
              className="img"
              alt="img"
            />
          </div>
        </div>

        <div className="popup-text">
          {" "}
          <div className="text-section">
            <h1 className="rajus-text">
              Raju Rassibomb <br /> MRP: <br />
              Raju's Dream's
            </h1>

            <div>
              <button onClick={clearpopup} className="close-btn">
                <IoMdClose />
              </button>
            </div>
          </div>
          <p>
            <span>Product Description: </span>
            <br />
            This product packs an extra punch thanks to the literal blood, sweet
            and tears of young blood
          </p>
          <hr />
          <ul>
            <span>Product Containeer:</span>
            <li>10 hand-hunted peaces of Rassibomb</li>
            <li>Jiled with greate pain</li>
            <li>Raju's hopes</li>
          </ul>
          <hr />
          <p>
            <span>Shipping time: </span>
            <br />
            Before Raju understands that is dreams do not matter
          </p>
          <div>
            <button className="choosenow-btn">Choose Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popup;
