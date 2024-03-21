import Header from "../../Components/GeneralComponents/Header";
import Accounts from "../../Components/DashPageComponents/Accounts/Accounts";
import PassGen from "../../Components/DashPageComponents/PassGenComponent/PassGen";
import DataBreachesAreaChart from "../../Components/DashPageComponents/DataVisualisations/DataBreachesAreaChart";

import "./Dash.css";

const Dash = () => {
  return (
    <div id="dash">
      <Header />
      <div className="row">
        <PassGen />
        <Accounts />
      </div>
      <div class="container text-center">
        <div className="row">
          <div className="col-md-8 offset-md-2 align-self-center">
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <DataBreachesAreaChart />
                </div>
                <div class="carousel-item">
                  <DataBreachesAreaChart />
                </div>
                <div class="carousel-item">
                  <DataBreachesAreaChart />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
