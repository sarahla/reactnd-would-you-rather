import React from 'react';
import { useSelector } from 'react-redux';
import QuestionCard from '../../components/QuestionCard/';
import { Box } from 'reflexbox/styled-components';
import Tabs from '../../components/Tabs';

function Dashboard() {
    const questions = useSelector(state => state.questions);
    const authedUser = useSelector(state => state.authedUser);
    const questionsList = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp);

    const { answered, unanswered } = questionsList.reduce((acc, qid) => {
        const question = questions[qid];
        const answers = [...question.optionOne.votes, ...question.optionTwo.votes];
        answers.includes(authedUser) ? acc.answered.push(qid) : acc.unanswered.push(qid);
        return acc
    }, { answered: [], unanswered: [] })

    return (
        <Box maxWidth="700px" margin="auto">
            <h1>Dashboard</h1>
            <Tabs>
                <Box label="Unanswered Questions" id="unanswered" width={1/2} px={4}>
                    {
                        unanswered.map(qid => {
                            return (
                                <QuestionCard key={qid} question={questions[qid]} />
                            )
                        })
                    }
                </Box>
                <Box label="Answered Questions" id="answered" width={1/2} px={4}>
                    {
                        answered.map(qid => {
                            return (
                                <QuestionCard key={qid} question={questions[qid]} />
                            )
                        })
                    }
                </Box>
            </Tabs>
        </Box>
    )
}

export default Dashboard;