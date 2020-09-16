import React from 'react';
import styles from './BusinessRating.module.css';
import Rating from 'react-rating';




class BusinessRating extends React.Component {

    

    render() {

        let rating_value = this.props.value

        return (
            <div className={styles.rating}>
            <Rating
                emptySymbol="far fa-star "
                fullSymbol=  { `fas fa-star ${styles.red}` } 
                fractions={2}
                readonly
                initialRating={rating_value}
                
            />
            <p className={styles.size} > {rating_value}</p>
        </div>
        
        )
    }
    }
    
    
    export default BusinessRating