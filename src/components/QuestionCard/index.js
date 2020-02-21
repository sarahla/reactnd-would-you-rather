import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function QuestionCard(props) {
    const { question } = props;
    const questionAuthor = useSelector(state => state.users[question.author]);
    
    return (
        <div>
            <p>{questionAuthor.name} asks:</p>
            <h4>Would you rather...</h4>
            <p>{question.optionOne.text} or ... ?</p>
            <Link to={`/questions/${question.id}`}>
                View Poll
            </Link>
        </div>
    )
}

export default QuestionCard;