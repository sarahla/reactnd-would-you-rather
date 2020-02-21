import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleSaveAnswer } from '../../actions/questions'

function PollForm(props) {
    const { question } = props;
    const [answer, setAnswer] = useState(null);
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        const answer = e.target.value;
        setAnswer(answer);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleSaveAnswer(question, answer));
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    name={question.id} 
                    type="radio" 
                    id="optionOne" 
                    value="optionOne" 
                    onChange={handleChange} 
                />
                <label htmlFor="optionOne">{question.optionOne.text}</label>
                <p>or</p>
                <input 
                    name={question.id} 
                    type="radio" 
                    id="optionTwo" 
                    value="optionTwo" 
                    onChange={handleChange} 
                />
                <label htmlFor="optionTwo">{question.optionTwo.text}?</label>
                <br/>
                <button
                    type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default PollForm;