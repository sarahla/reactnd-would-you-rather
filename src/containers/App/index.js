import React, { Component} from 'react';
import { connect } from 'react-redux'
import LoginPage from '../LoginPage/';
import Dashboard from '../Dashboard/';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import { handleInitialUserData, handleInitialQuestionData } from '../../actions/shared';
import NavBar from '../../components/NavBar';
import QuestionDetail from '../QuestionDetail';
import AddQuestion from '../AddQuestion';
import LeaderBoard from '../Leaderboard';

class App extends Component {
  componentDidMount() {
	const { dispatch } = this.props;
    dispatch(handleInitialUserData());
    dispatch(handleInitialQuestionData());
  }
  render() {
	const { authedUser, location } = this.props;
    return (
      <Router>
        <div className="App container">
          <header className="App-header">
            <NavBar />
            <h1>Would You Rather...?</h1>
          </header>
          <Route path='/login' component={LoginPage} />
          {
            authedUser != null ? (
              <Switch>
                <Route path='/' exact component={Dashboard} />
                <Route path='/questions/:id' component={QuestionDetail} />
                <Route path='/add' component={AddQuestion} />
                <Route path='/leaderboard' component={LeaderBoard} />
              </Switch>
              ) : (
              <Redirect to={{ pathname: '/login', state: { from: location } }} />
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