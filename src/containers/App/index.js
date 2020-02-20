import React, { Component} from 'react';
import { connect } from 'react-redux'
import LoginPage from '../LoginPage/';
import Dashboard from '../Dashboard/';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { handleInitialUserData } from '../../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialUserData());
  }
  render() {
    return (
      <Router>
        <div className="App container">
          <header className="App-header">
            <h1>Would You Rather...?</h1>
          </header>
          <Route path='/login' component={LoginPage} />
          {
            this.props.authedUser != null ? (
              <Route path='/user/:id' component={Dashboard} />
              ) : (
              <Redirect to={{ pathname: '/login', state: { from: this.props.location } }} />
            )
          }
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)