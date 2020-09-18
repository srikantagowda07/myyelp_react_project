import React from 'react';
import LandingPage  from "./landing_page/landing_page"
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Search from './search_result/seacrh';
import Write_review from './Write_review/Write_review';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path='/search' component={Search} />
          <Route exact path='/' component={LandingPage} />
          <Route path='/writereview' component={Write_review} />
      </Router>
    )
  }
}

export default App