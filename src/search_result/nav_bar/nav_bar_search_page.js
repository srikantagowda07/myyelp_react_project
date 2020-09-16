import React from "react";
import styles from "./nav_bar.module.css";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import Search_result from "../search_list/Search_result/Search_result";

class Nav_bar_search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: "",
      fetchedData: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let myVariable1 = new URLSearchParams(window.location.search).get(
      "find_desc"
    );
    let myVariable2 = new URLSearchParams(window.location.search).get(
      "find_loc"
    );
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const API_BASE_URL = "https://api.yelp.com/v3";
    const BEARER_TOKEN =
      "ANuL0W7wntrogu2fumR35kK1Plmb1hvJ7UBAwqe5pCS1ZyZvCG-5QI957M3trI6w5k2msmYxHpFVJRSsYMwyJoL-M9PyL4jLbvkork-7yg88SLfj1M8xujjyJvdZX3Yx";
    console.log("working");
    fetch(
      `${proxyurl}${API_BASE_URL}/businesses/search?term=${myVariable1}&location=${myVariable2}`,
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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submit(event) {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const API_BASE_URL = "https://api.yelp.com/v3";
    const term = this.state.term;
    const location = this.state.location;
    const BEARER_TOKEN =
      "ANuL0W7wntrogu2fumR35kK1Plmb1hvJ7UBAwqe5pCS1ZyZvCG-5QI957M3trI6w5k2msmYxHpFVJRSsYMwyJoL-M9PyL4jLbvkork-7yg88SLfj1M8xujjyJvdZX3Yx";
    console.log("working");
    fetch(
      `${proxyurl}${API_BASE_URL}/businesses/search?term=${term}&location=${location}`,
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
    event.preventDefault();
  }

  render() {
    if (Boolean(this.state.fetchedData)) {
      var data = this.state.fetchedData;
      if (data.businesses !== undefined) {
        var CommponentArray = [];
        let i = 1;
        data.businesses.forEach((element) => {
          var object = {
            image: element.image_url,
            phoneNumber: element.phone,
            alias: element.alias,
            id: i++,
            location: element.location.city,
            name: element.name,
            rating: element.rating,
          };
          CommponentArray.push(
            <Link
              to={{ pathname: `/writereview/${object.name}`, state: object }}
            >
              {" "}
              <Search_result key={data.businesses.id} value={object} />{" "}
            </Link>
          );
        });
      }
    }

    return (
      <div>
        <div className={styles.top_bar_containor}>
          <Link to="/">
            {" "}
            <img src={logo} alt=" " className={styles.belb_logo} />{" "}
          </Link>
          <div>
            <form onSubmit={this.submit.bind(this)}>
              <div className={styles.container}>
                <div>
                  <div className="field has-addons">
                    <p className="control">
                      <input
                        className="input"
                        name="term"
                        onChange={this.handleChange}
                        type="text"
                        placeholder="plumbers, delivery, takeout"
                      />
                    </p>
                    <p className="control">
                      <input
                        className={`input  ${styles["search_bar_shape"]}`}
                        type="text"
                        name="location"
                        onChange={this.handleChange}
                        placeholder="address, neighorhood, city, state"
                      />
                    </p>
                    <div>
                      <button
                        className={`button ${styles.button_red}`}
                        onClick={this.submit.bind(this)}
                      >
                        <span className="icon">
                          <i className="fas fa-search"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className={styles["Search_block"]}>{CommponentArray}</div>
      </div>
    );
  }
}

export default Nav_bar_search;
