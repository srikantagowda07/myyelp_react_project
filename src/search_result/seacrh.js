import React from 'react';
// import { render } from '@testing-library/react';
import Nav_bar from './nav_bar/nav_bar_search_page'
import Search_results_list from './search_list/search_result_list'
//import styles from './seacrh.module.css'


class search extends React.Component {

render() {
    return (
        <div>   
        <div><Nav_bar/></div>
        <div> <Search_results_list/> </div>        
      </div>
    
    )
}
}


export default search