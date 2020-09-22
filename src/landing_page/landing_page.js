import React from "react";
import styles from "./landing_page.module.css";
import Nav_bar from "./Nav_Bar/Nav_Bar";
import logo from "../logo.png";
import Search_Bar from "./Search_Bar/searcg_bar";
import Recomendation_cards from "./recomendation_cards";

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      title: " yelp ",
      fetchedData: null,
    };
  }

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const API_BASE_URL = "https://api.yelp.com/v3";
    const BEARER_TOKEN =
      "ANuL0W7wntrogu2fumR35kK1Plmb1hvJ7UBAwqe5pCS1ZyZvCG-5QI957M3trI6w5k2msmYxHpFVJRSsYMwyJoL-M9PyL4jLbvkork-7yg88SLfj1M8xujjyJvdZX3Yx";
    console.log("fetching");
    fetch(
      `${proxyurl}${API_BASE_URL}/businesses/search?term=food&location=japan`,
      {
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          Origin: "localhost",
          withCredentials: true,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        this.setState({ fetchedData: data });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  render() {
    if (Boolean(this.state.fetchedData)) {
      let data = this.state.fetchedData.businesses;
      var card_1 = { image: data[0].image_url, name: data[0].name, rating: data[0].rating, id: 1 };
      var card_2 = { image: data[1].image_url, name: data[1].name, rating: data[1].rating, id: 2 };
      var card_3 = { image: data[2].image_url, name: data[2].name, rating: data[2].rating, id: 3 };
      var card_4 = {  image: data[3].image_url, name: data[3].name, rating: data[3].rating, id: 4 };
    }

    return (
      <div>
        <div className={styles.landing}>
          <div className={styles.nav_bar}>
            <Nav_bar />
            <img src={logo} alt=" " className={styles.belb_logo} />
            <Search_Bar />
          </div>

          <div className={styles.center}>
            {" "}
            <p>Code by srikanta gowda</p>{" "}
          </div>
        </div>

        <div className={styles.landing_page_recomendation_section}>
          <div className={styles.review_heading}>
            {" "}
            <h1  className={styles.font_weight}>Your Next Review Awaits</h1>{" "}
          </div>

          <div className={styles.containerflex}>
            <Recomendation_cards value={card_1} />

            <Recomendation_cards value={card_2} />
          </div>

          <div className={styles.containerflex}>
            <Recomendation_cards value={card_3} />

            <Recomendation_cards value={card_4} />
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
