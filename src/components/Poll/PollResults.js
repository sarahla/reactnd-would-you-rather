import React from 'react';

function PollResults(props) {
    const { question } = props;
    const optionOne = question.optionOne;
    const optionTwo = question.optionTwo;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;

    const votePercentage = option => {
        return option.votes.length / totalVotes * 100;
    }

    return (
        <div>
            <h2>Results:</h2>
            <div>
                Would you rather {optionOne.text}?<br/>
                {votePercentage(optionOne)} %<br />
                {optionOne.votes.length} of {totalVotes} votes
            </div>
            <div>
                Would you rather {optionTwo.text}?<br/>
                {votePercentage(optionTwo)} %<br />
                {optionTwo.votes.length} of {totalVotes} votes
            </div>
        </div>
    )
}

export default PollResults;