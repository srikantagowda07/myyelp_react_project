import React from "react";
import BusinessRating from "../search_result/search_list/Search_result/Businessrating/Business_rating";
import styles from "./landing_page.module.css";

class Recomendation_cards extends React.Component {
  remove(e) {
    let id = e.target.className;
    var elem = document.getElementById(id);
    elem.remove();
  }

  render() {
    if (Boolean(this.props.value)) {
      var image = this.props.value.image;
      var name = this.props.value.name;
      var rating = this.props.value.rating;
      var id = this.props.value.id;
    }

    return (
      <div className={styles.container} id={`myDiv${id}`}>
        <img src={image} alt="business" className={styles["business-image"]} />
        <div className={styles["business-info"]}>
          <button className= {`myDiv${id}`} onClick={this.remove}>
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
    );
  }
}

export default Recomendation_cards;
