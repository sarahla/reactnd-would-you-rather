import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Avatar from '../Avatar';

function QuestionCard(props) {
    const { question } = props;
    const questionAuthor = useSelector(state => state.users[question.author]);
    
    return (
        <div>
            <Avatar user={questionAuthor} width="50px" />
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