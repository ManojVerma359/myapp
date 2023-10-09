import logo from "./logo.svg";
import big_card from "../src/images/mainimge.png";
import card1 from "../src/images/card1.png";
import card2 from "../src/images/card2.png";
import card3 from "../src/images/card3.png";
import card4 from "../src/images/card4.png";
import "./App.css";

function App() {
  return (
    <div>
      <section>
        <div className="container">
          <h1 className="featurend ff-hindi pding">Featured Product</h1>
          <div className="row">
            <div className="col-12 col-5  po_relative">
              <img src={big_card} alt="#" className="w-100 b_radius " />
              <h2 className="explore ff-hindi text_set">
                Explore More Product
              </h2>
            </div>

            <div className="col-12 col-7 pt_50">
              <div className="row d_flex justify-content-center">
                <div className="col-6 pt_49">
                  <div className="card pdng_card">
                    <img src={card1} alt="#" className="w-100"></img>
                    <p className="concetti ff-poppin pt_15">
                      {" "}
                      Concetti Di-Lusso ALESANDRDO Luxury Turkish Spa Towels and
                      ganic Bamboo Robes 12 PC set
                    </p>
                    <div className="align_all pt_29 ">
                      <p className="dolor ff-hindi ">$169.99</p>
                      <p className="d199 ff-hindi">$199.99</p>
                      <button className="btn_add add_text ff-hindi ">
                        ADD CART
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-6 pt_49">
                  <div className="card pdng_card">
                    <img src={card2} alt="#" className="w-100"></img>
                    <p className="concetti ff-poppin pt_15">
                      Concetti Di-Lusso CAPPY Organic Turkish Cotton - Set of 4
                      in Gift Box
                    </p>
                    <div className="align_all pt_55 ">
                      <p className="dolor ff-hindi ">$169.99</p>
                      <p className="d199 ff-hindi">$199.99</p>
                      <button className="btn_add add_text ff-hindi">
                        ADD CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt_55 d_flex justify-content-center">
                <div className="col-6">
                  <div className="card pdng_card">
                    <img src={card3} alt="#" className="w-100"></img>
                    <p className="concetti ff-poppin pt_15">
                      {" "}
                      Concetti Di-Lusso ALESANDRDO Luxury Turkish Spa Towels and
                      ganic Bamboo Robes 12 PC set
                    </p>
                    <div className="align_all pt_29 ">
                      <p className="dolor ff-hindi ">$169.99</p>
                      <p className="d199 ff-hindi">$199.99</p>
                      <button className="btn_add add_text ff-hindi">
                        ADD CART
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-6 pt_49">
                  <div className="card pdng_card">
                    <img src={card4} alt="#" className="w-100"></img>
                    <p className="concetti ff-poppin pt_15">
                      Concetti Di-Lusso CAPPY Organic Turkish Cotton - Set of 4
                      in Gift Box
                    </p>
                    <div className="align_all pt_55 ">
                      <p className="dolor ff-hindi ">$169.99</p>
                      <p className="d199 ff-hindi">$199.99</p>
                      <button className="btn_add add_text ff-hindi">
                        ADD CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
