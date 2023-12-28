import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__innerbox1 container">
        <h2 className="logo">
          Nestora<span>.</span>
        </h2>
        <div className="hero__innerbox1-navbar">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact us</a>
            </li>
          </ul>
          <div className="navbar-btns">
            <a href="#coffee-icon">
              <FontAwesomeIcon icon={faUser} style={{ fontSize: "22px", color: 'white' }} />
            </a>
            <a href="#other-anchor">
              <FontAwesomeIcon
                icon={faCartShopping}
                style={{ fontSize: "22px", color: 'white' }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="hero__innerbox2 container">
        <div className="hero__innerbox2-box1">
          <h1>Simple Yet Stylish Interiors.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            assumenda earum, laudantium ab explicabo, velit voluptate aspernatur
            id magni.
          </p>
          <div className="hero__innerbox2-box1__buttons">
            <button className="primary-btn">Shop Now</button>
            <button className="secondary-btn">Explore</button>
          </div>
        </div>
        <div className="hero__innerbox2-box2">
          <img src="/Images/heroImage.png" alt="Interior Design" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
