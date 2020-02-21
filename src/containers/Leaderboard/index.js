import React from 'react';
import { useSelector } from 'react-redux';

function LeaderBoard() {
    const userIDs = useSelector((state) => Object.keys(state.users));
    const users = useSelector((state) => state.users);
    // const questions = useSelector(state => state.questions);

    const countAnswers = (answers) => Object.keys(answers).length;

    const totalScore = (user) => countAnswers(user.answers) + user.questions.length;

    return (
        <div>
            {
                userIDs
                .sort((a, b) => totalScore(users[b]) - totalScore(users[a]))
                .map((userID) => (
                    <div key={userID}>
                    <h2>{users[userID].name}</h2>
                    <p />
                    </div>
                ))
            }
        </div>
    );
}

export default LeaderBoard;
