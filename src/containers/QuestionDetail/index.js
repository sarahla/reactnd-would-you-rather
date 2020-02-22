import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PollForm from '../../components/Poll/PollForm';
import PollResults from '../../components/Poll/PollResults';

function QuestionDetail(props) {
    const { question, users, authedUser } = props;
    
    if ( typeof(question) !== 'undefined' ) {
        // Check if the question exists before rendering
        const questionAuthor = users[question.author];
        const answers = [...question.optionOne.votes, ...question.optionTwo.votes];
        return (
            <div>
                <p>{questionAuthor.name} asks:</p>
                <h4>Would you rather...</h4>
                {
                    answers.includes(authedUser) ? (
                        <PollResults question={question} />
                    ): (
                        <PollForm question={question} questionAuthor={questionAuthor} />
                    )
                }
            </div>
        )
    } else {
        // If question doesn't exist, redirect to 404
        return (
            <Redirect to={{ pathname: '/404'}} />
        )
    }    
}

function mapStateToProps({ questions, users, authedUser }, {match}) {
    return {
      loading: authedUser === null,
      question: questions[match.params.id],
      users,
      authedUser
    }
}
  
export default withRouter(connect(mapStateToProps)(QuestionDetail));