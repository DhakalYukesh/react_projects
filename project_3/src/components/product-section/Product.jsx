import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__innerbox container">
        <div className="product__innerbox-box1">
          <h2>Use of Premium and fashioned materials.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
            molestias beatae provident nobis adipisci libero.
          </p>
          <button className="secondary-btn">Explore</button>
        </div>
        <div className="product__innerbox-box2">
          <a className="product-item" href="#">
            <img
              src="/Images/product-1.png"
              alt="Product Image"
              className="product-image"
            />
            <div className="details">
              <h4>Nordic Chair</h4>
              <h3>$50.00</h3>
            </div>
            <span className="icon-cross">
              <img src="/cross.svg" alt="plus icon" className="img-fluid" />
            </span>
          </a>
          <a className="product-item" href="#">
            <img
              src="/Images/product-2.png"
              alt="Product Image"
              className="product-image"
            />
            <div className="details">
              <h4>Kruzo Aero Chair</h4>
              <h3>$82.00</h3>
            </div>
            <span className="icon-cross">
              <img src="/cross.svg" alt="plus icon" className="img-fluid" />
            </span>
          </a>
          <a className="product-item" href="#">
            <img
              src="/Images/product-3.png"
              alt="Product Image"
              className="product-image"
            />
            <div className="details">
              <h4>Ergonomic Chair</h4>
              <h3>$65.00</h3>
            </div>
            <span className="icon-cross">
              <img src="/cross.svg" alt="plus icon" className="img-fluid" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Product;
