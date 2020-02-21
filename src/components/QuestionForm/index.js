import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { handleSaveQuestion } from '../../actions/questions'

function QuestionForm() {
    let history = useHistory();
    const authedUser = useSelector(state => state.authedUser);
    const dispatch = useDispatch();
    const [options, setOptions] = useState(
        {
            optionOneText: null, 
            optionTwoText: null,
            author: authedUser
        }
    );

    const handleChange = (e) => {
        const { target } = e;
        setOptions({
            ...options,
            [target.id]: target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(handleSaveQuestion(options));
        history.push(`/`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="optionOneText" 
                    id="optionOneText" 
                    placeholder="Enter Option One Text Here" 
                    onChange={handleChange}/>
                <p>or</p>
                <input 
                    type="text" 
                    name="optionTwoText" 
                    id="optionTwoText" 
                    placeholder="Enter Option Two Text Here"
                    onChange={handleChange}/>
                <button
                    type="submit">
                    Submit
                </button>
            </form>
        </div>
    )   
}

export default QuestionForm;