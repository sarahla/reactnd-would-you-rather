import React, { Component} from 'react';
import { connect } from 'react-redux'
import LoginPage from '../LoginPage/';
import Dashboard from '../Dashboard/';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import { handleInitialUserData, handleInitialQuestionData } from '../../actions/shared';
import NavBar from '../../components/NavBar';
import QuestionDetail from '../QuestionDetail';
import AddQuestion from '../AddQuestion';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialUserData());
    this.props.dispatch(handleInitialQuestionData());
  }
  render() {
    return (
      <Router>
        <div className="App container">
          <header className="App-header">
            <NavBar />
            <h1>Would You Rather...?</h1>
          </header>
          <Route path='/login' component={LoginPage} />
          {
            this.props.authedUser != null ? (
              <Switch>
              <Route path='/' exact component={Dashboard} />
              <Route path='/questions/:id' component={QuestionDetail} />
              <Route path='/add' component={AddQuestion} />
              </Switch>
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