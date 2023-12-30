import "./Desc.css";

function Desc() {
  return (
    <div className="desc">
      <div className="desc__innerbox container">
        <div className="desc__innerbox-box1">
          <h2>Why Choose Us?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            accusamus, odit totam aut nulla quam perferendis obcaecati
            repellendus eveniet? Magni.
          </p>
          <div className="innerbox">
            <div className="innerbox-card">
              <img src="/truck.svg" alt="card icon" />
              <h5>Fast & Free Shipping</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, voluptatem?
              </p>
            </div>
            <div className="innerbox-card">
              <img src="/support.svg" alt="" />
              <h5>24/7 Support</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, voluptatem?
              </p>
            </div>
            <div className="innerbox-card">
              <img src="/bag.svg" alt="" />
              <h5>Easy to shop</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, voluptatem?
              </p>
            </div>
            <div className="innerbox-card">
              <img src="/return.svg" alt="" />
              <h5>Hassle Free Refund</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, voluptatem?
              </p>
            </div>
          </div>
        </div>
        <div className="desc__innerbox-box2">
          
          <img
            src="/Images/why-choose-us-img.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Desc;
