import React, { Component} from 'react';
import { connect } from 'react-redux'
import LoginPage from '../LoginPage/';
import Dashboard from '../Dashboard/';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { handleInitialUserData, handleInitialQuestionData } from '../../actions/shared';

import ProtectedRoute from '../../components/ProtectedRoute';
import NavBar from '../../components/NavBar';
import QuestionDetail from '../QuestionDetail';
import AddQuestion from '../AddQuestion';
import LeaderBoard from '../Leaderboard';
import Error404Page from '../Error404Page';

class App extends Component {
  componentDidMount() {
	const { dispatch } = this.props;
    dispatch(handleInitialUserData());
    dispatch(handleInitialQuestionData());
  }
  render() {
    return (
      <Router>
        <div className="App container">
          <header className="App-header">
            <NavBar />
          </header>
            <Switch>
              <ProtectedRoute path='/' exact component={Dashboard} />
              <ProtectedRoute path='/questions/:id' exact component={QuestionDetail} />
              <ProtectedRoute path='/add' exact component={AddQuestion} />
              <ProtectedRoute path='/leaderboard' exact component={LeaderBoard} />
              <Route path='/login' component={LoginPage} />
              <Route component={Error404Page} />
            </Switch>
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)