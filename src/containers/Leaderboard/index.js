import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Box } from 'reflexbox/styled-components';
import ScoreCard from '../../components/ScoreCard'

function LeaderBoard() {
    const userIDs = useSelector((state) => Object.keys(state.users));
    const users = useSelector((state) => state.users);
    const countAnswers = (user) => Object.keys(user.answers).length;
    const countQuestions = (user) => user.questions.length;
    const totalScore = (user) => countAnswers(user) + countQuestions(user);

    return (
        <Flex flexDirection="column" maxWidth="700px" margin="auto">
            <Box>
                <h1>Leader Board</h1>
            </Box>
            {
                userIDs
                .sort((a, b) => totalScore(users[b]) - totalScore(users[a]))
                .map((userID, index) => (
                    <ScoreCard
                        index={index}
                        key={userID} 
                        user={users[userID]}
                        questions={countQuestions(users[userID])}
                        answers={countAnswers(users[userID])}
                        total={totalScore(users[userID])}
                    />
                ))
            }
        </Flex>
    );
}

export default LeaderBoard;
