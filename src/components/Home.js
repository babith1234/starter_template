import "./style.css";
import Navbar from "./Navbar";
import shoecar1 from "./shoecar1.jpg";
import shoecar2 from "./shoecar2.jpg";
import shoecar3 from "./shoecar3.jpg";
import shoe1 from "./shoe1.jpg";
import shoe2 from "./shoe2.jpg";
import shoe3 from "./shoe3.jpg";
import shoe4 from "./shoe4.jpg";
import shoe5 from "./shoe5.jpg";
import shoe6 from "./shoe6.jpg";
import shoe7 from "./shoe7.jpg";
import shoe8 from "./shoe8.jpg";
const Home = () => {
  return (
    <>
      <Navbar />
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={shoecar1}
              class="d-block w-100"
              alt="no"
              style={{ height: "600px" }}
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src={shoecar2}
              class="d-block w-100"
              alt="no"
              style={{ height: "600px" }}
            ></img>
          </div>
          <div class="carousel-item">
            <img
              src={shoecar3}
              class="d-block w-100"
              alt="no"
              style={{ height: "600px" }}
            ></img>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container">
        <div class="row">
          <div class="col col-md-3">
            <div class="card" style={{ width: "18rem" }}>
              <img src={shoe1} class="card-img-top" alt="no"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>

                <a href="#" class="btn btn-primary">
                  Shop now
                </a>
              </div>
            </div>
          </div>

          <div class="col col-md-3">
            <div class="card" style={{ width: "18rem" }}>
              <img src={shoe2} class="card-img-top" alt="no"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>

                <a href="#" class="btn btn-primary">
                  Shop now
                </a>
              </div>
            </div>
          </div>

          <div class="col col-md-3">
            <div class="card" style={{ width: "18rem" }}>
              <img src={shoe3} class="card-img-top" alt="no"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>

                <a href="#" class="btn btn-primary">
                  Shop now
                </a>
              </div>
            </div>
          </div>

          <div class="col col-md-3">
            <div class="card" style={{ width: "18rem" }}>
              <img src={shoe4} class="card-img-top" alt="no"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>

                <a href="#" class="btn btn-primary">
                  Shop now
                </a>
              </div>
            </div>
          </div>

          <div class="col col-md-3">
            <div class="card" style={{ width: "18rem" }}>
              <img src={shoe5} class="card-img-top" alt="no"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>

                <a href="#" class="btn btn-primary">
                  Shop now
                </a>
              </div>
            </div>
          </div>

          <div class="col col-md-3">
            <div class="card" style={{ width: "18rem" }}>
              <img src={shoe6} class="card-img-top" alt="no"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>

                <a href="#" class="btn btn-primary">
                  Shop now
                </a>
              </div>
            </div>
          </div>

          <div class="col col-md-3">
            <div class="card" style={{ width: "18rem" }}>
              <img src={shoe7} class="card-img-top" alt="no"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>

                <a href="#" class="btn btn-primary">
                  Shop now
                </a>
              </div>
            </div>
          </div>

          <div class="col col-md-3">
            <div class="card" style={{ width: "18rem" }}>
              <img src={shoe8} class="card-img-top" alt="no"></img>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>

                <a href="#" class="btn btn-primary">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
