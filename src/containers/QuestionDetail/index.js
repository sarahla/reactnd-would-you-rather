import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PollForm from '../../components/Poll/PollForm';
import PollResults from '../../components/Poll/PollResults';


function QuestionDetail(props) {
    const { id } = props.match.params;
    const question = useSelector(state => state.questions[id]);
    const authedUser = useSelector(state => state.authedUser);
    const questionAuthor = useSelector(state => state.users[question.author]);
    const answers = [...question.optionOne.votes, ...question.optionTwo.votes]
    
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
}

export default QuestionDetail;