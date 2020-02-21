import React from 'react';
import { useSelector } from 'react-redux';

function PollForm(props) {
    const { question } = props;
    return (
        <div>
            <form>
                <input name={question.id} type="radio" id="optionOne" value="optionOne" />
                <label htmlFor="optionOne">{question.optionOne.text}</label>
                <p>or</p>
                <input name={question.id} type="radio" id="optionTwo" value="optionTwo" />
                <label htmlFor="optionTwo">{question.optionTwo.text}?</label>
                <button
                    type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default PollForm;