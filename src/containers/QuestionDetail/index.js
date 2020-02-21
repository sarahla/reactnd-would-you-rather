import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PollForm from '../../components/Poll/PollForm';
import PollResults from '../../components/Poll/PollResults';


function QuestionDetail(props) {
    const { id } = props.match.params;
    const question = useSelector(state => state.questions[id]);
    const questionAuthor = useSelector(state => state.users[question.author]);
    
    return (
        <div>
            <p>{questionAuthor.name} asks:</p>
            <h4>Would you rather...</h4>
            <PollForm question={question} questionAuthor={questionAuthor} />
            <PollResults question={question} />
        </div>
    )
}

export default QuestionDetail;