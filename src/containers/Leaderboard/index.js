import React from 'react';
import { useSelector } from 'react-redux';
import ScoreCard from '../../components/ScoreCard'

function LeaderBoard() {
    const userIDs = useSelector((state) => Object.keys(state.users));
    const users = useSelector((state) => state.users);
    // const questions = useSelector(state => state.questions);

    const countAnswers = (user) => Object.keys(user.answers).length;
    const countQuestions = (user) => user.questions.length;
    const totalScore = (user) => countAnswers(user) + countQuestions(user);

    return (
        <div>
            {
                userIDs
                .sort((a, b) => totalScore(users[b]) - totalScore(users[a]))
                .map((userID) => (
                    <ScoreCard 
                        key={userID} 
                        user={users[userID]}
                        questions={countQuestions(users[userID])}
                        answers={countAnswers(users[userID])}
                        total={totalScore(users[userID])}
                    />
                ))
            }
        </div>
    );
}

export default LeaderBoard;
