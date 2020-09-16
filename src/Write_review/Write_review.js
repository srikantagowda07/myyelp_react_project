import React from "react";
import styles from "./Write_review.module.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";
import Rating from "react-rating";

class Write_review extends React.Component {

  render() {
    if(undefined !== this.props.location){
      var data = this.props.location.state 
      var name = data.name
    }
    return (
      <div className={styles.main}>
        <div className={styles.nav_bar}>
          <Link to="/">
            {" "}
            <img src={logo} alt=" " className={styles.belb_logo} />{" "}
          </Link>
          <h1 className={styles.textfont}>Write a Review</h1>
        </div>

        <div className={styles.review_input_section}>
          <h1 className={styles.tag}  > {name}</h1>
          <p>Read our review guidelines</p>
          <Rating
            placeholderRating={3}
            emptySymbol={`far fa-star ${styles}`}
            placeholderSymbol={`fas fa-star ${styles.red}`}
            fullSymbol={`far fa-star ${styles.red}`}
          />{" "}
          Select your rating
          <div>
            <input
              className={styles.input}
              type="text"
              placeholder="This spot is several meal kids,as well as offering during covid19.
                  i am glad of course nothing beats the in person experence but delivery is a greate seound option right now."
            />
            <h1> Attach Photos Optional</h1>
            <input
              className={styles.input2}
              type="text"
              placeholder= "upload"
            />
       <div>       <button  className={styles.button} >Post Review</button></div> 
          </div>        
        </div>
      </div>
    );
  }
}

export default Write_review;
