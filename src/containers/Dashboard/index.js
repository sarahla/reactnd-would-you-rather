import React from 'react';
import { useSelector } from 'react-redux';
import QuestionCard from '../../components/QuestionCard/';

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
        <div>
            <h2>Answered</h2>
            {
                answered.map(qid => {
                    return (
                        <QuestionCard key={qid} question={questions[qid]} />
                    )
                })
            }

            <h2>Unanswered</h2>
            {
                unanswered.map(qid => {
                    return (
                        <QuestionCard key={qid} question={questions[qid]} />
                    )
                })
            }
        </div>
    )
}

export default Dashboard;