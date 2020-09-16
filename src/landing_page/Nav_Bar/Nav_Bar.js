import React from "react";
import styles from "./TopNav.module.css";
import img from "./message_icon.jpg";

function Nav_bar() {
  return (
    <div className={styles.nav_bar}>
      <span className={styles.write_review}>
        <a
          className={styles.write_review}
          href="https://www.yelp.com/writeareview"
          target="_blank"
        >
          Write a Review
        </a>
      </span>
      <span className={styles.write_review}>
        <a
          className={styles.write_review}
          href="https://www.yelp.com/events"
          target="_blank"
        >
          Events
        </a>
      </span>

      <span className={styles.write_review}>
        <a
          className={styles.write_review}
          href="https://www.yelp.com/talk"
          target="_blank"
        >
          Talk
        </a>
      </span>
    <div className={styles.message_icon}><img src= {img} alt=" "/></div> 
    </div>
  );
}

export default Nav_bar;
