import React, { Component} from 'react';
import { connect } from 'react-redux'
import LoginPage from '../LoginPage/';
import { handleInitialUserData } from '../../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialUserData());
  }
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <h1>Would You Rather...?</h1>
        </header>
        <LoginPage />
      </div>
    )
  }
}

export default connect()(App);
