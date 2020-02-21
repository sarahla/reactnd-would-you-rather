import React from 'react';
import { useSelector } from 'react-redux';
import QuestionCard from '../../components/QuestionCard/';

function Dashboard() {
    const state = useSelector(state => state);
    const questions = state.questions;
    const questionsList = Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp);

    return (
        <div>
            {
                questionsList.map(question => {
                    const questionData = questions[question];
                    return (
                        <QuestionCard key={questionData.id} question={questionData} />
                    )
                })
            }
        </div>
    )
}

export default Dashboard;