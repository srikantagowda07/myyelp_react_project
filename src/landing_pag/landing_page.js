import React from "react";
import styles from "./landing_page.module.css";
import Nav_bar from "./Nav_Bar/Nav_Bar";
import logo from "../logo.png";
import Search_Bar from "./Search_Bar/searcg_bar";
import BusinessRating from "../search_result/search_list/Search_result/Businessrating/Business_rating";

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
    console.log("working");
    fetch(
      `${proxyurl}${API_BASE_URL}/businesses/search?term=restaurants&location=Rome`,
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

  remove(e) {
    let id = e.target.className;
    var elem = document.getElementById(id);
    elem.remove();
  }

  render() {
    console.log("landing page", this.state.fetchedData);
    if (Boolean(this.state.fetchedData)) {
      // console.log(this.state.fetchedData.businesses, "olaa");
      let a = this.state.fetchedData.businesses;
      var image = a[0].image_url;
      var name = a[0].name;
      var rating = a[0].rating;

      var image1 = a[1].image_url;
      var name1 = a[1].name;
      var rating1 = a[1].rating;

      var image2 = a[2].image_url;
      var name2 = a[2].name;
      var rating2 = a[2].rating;

      var image3 = a[3].image_url;
      var name3 = a[3].name;
      var rating3 = a[3].rating;
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
            <h1 style={{ fontWeight: "900" }}>Your Next Review Awaits</h1>{" "}
          </div>

          <div className={styles.containerflex}>
            <div className={styles.containerflex}>
              <div className={styles.container} id="myDiv1">
                <img
                  src={image}
                  alt="business"
                  className={styles["business-image"]}
                />
                <div className={styles["business-info"]}>
                <button className="myDiv1" onClick={this.remove}>
                    x
                  </button>
                  <h1 className={styles.font}>{name} </h1>
                  <p>Help the community decide</p>
                  <p>
                    {" "}
                    <span className="tag">
                      <BusinessRating value={rating} />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.containerflex} >
              <div className={styles.container} id="myDiv2">
                <img
                  src={image1}
                  alt="business"
                  className={styles["business-image"]}
                />

                <div className={styles["business-info"]}>
                <button className="myDiv2" onClick={this.remove}>
                    x
                  </button>
                  <h1 className={styles.font}>{name1} </h1>
                  <p>Help the community decide</p>
                  <p>
                    {" "}
                    <span className="tag">
                      <BusinessRating value={rating1} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.containerflex}>
            <div className={styles.containerflex}>
              <div className={styles.container} id="myDiv3" >
                <img
                  src={image2}
                  alt="business"
                  className={styles["business-image"]}
                />
                <div className={styles["business-info"]}>
                <button className="myDiv3" onClick={this.remove}>
                    x
                  </button>
                  <h1 className={styles.font}>{name2} </h1>
                  <p>Help the community decide</p>
                  <p>
                    {" "}
                    <span className="tag">
                      <BusinessRating value={rating2} />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.containerflex} >
              <div className={styles.container} id="myDiv4" >
                <img
                  src={image3}
                  alt="business"
                  className={styles["business-image"]}
                />
                <div className={styles["business-info"]}>
                  <button className="myDiv4" onClick={this.remove}>
                    x
                  </button>
                  <h1 className={styles.font}>{name3} </h1>
                  <p>Help the community decide</p>
                  <p>
                    {" "}
                    <span className="tag">
                      <BusinessRating value={rating3} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
