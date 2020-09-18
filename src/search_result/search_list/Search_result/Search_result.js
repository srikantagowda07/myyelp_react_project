import React from "react";
import styles from "./Search_result.module.css";
import BusinessRating from "./Businessrating/Business_rating";

class Search_result extends React.Component {
  render() {
    if (Boolean(this.props.value)) {
      var image = this.props.value.image;
      var tag = this.props.value.alias;
      var phoneNumber = this.props.value.phoneNumber;
      var id = this.props.value.id;
      var location = this.props.value.location;
      var name = this.props.value.name;
      var rating = this.props.value.rating;
    }

    return (
      <div className={styles.container} id={`${name}`}>
        <img src={image} alt="business" className={styles["business-image"]} />
        <div className={styles["business-info"]}>
          <h1 className="subtitle">
            {id}. {name}{" "}
          </h1>
          <BusinessRating value={rating} />
          <p>
            {" "}
            $$ <span className="tag">{tag}</span>
          </p>
        </div>
        <div className={styles["contact-info"]}>
          <p> {phoneNumber} </p>
          <p>{location}</p>
        </div>
      </div>
    );
  }
}

export default Search_result;
