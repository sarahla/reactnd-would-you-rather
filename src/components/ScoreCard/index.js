import React from 'react';

function ScoreCard(props) {
    const { user, questions, answers, total } = props;    
    return (
        <div>
            <h2>{user.name}</h2>
            <p>Questions: {questions}</p>
            <p>Answers: {answers}</p>
            <p>Total: {total}</p>
        </div>
    )
}

export default ScoreCard;