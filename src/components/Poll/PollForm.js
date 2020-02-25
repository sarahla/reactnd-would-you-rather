import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleSaveAnswer } from '../../actions/questions'
import { Flex, Box } from 'reflexbox/styled-components';
import styled from 'styled-components';
import Divider from '../../components/Divider';
import Button from '../../components/Button';

const StyledH2 = styled.h2`
    margin: 0 0 1rem 0;
`;

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
        <Flex flexDirection="column">
            <StyledH2>Would you rather...</StyledH2>
            <form onSubmit={handleSubmit}>
                <input 
                    name={question.id} 
                    type="radio" 
                    id="optionOne" 
                    value="optionOne" 
                    onChange={handleChange} 
                />
                <label htmlFor="optionOne">{question.optionOne.text}</label>
                <Divider>OR</Divider>
                <input 
                    name={question.id} 
                    type="radio" 
                    id="optionTwo" 
                    value="optionTwo" 
                    onChange={handleChange} 
                />
                <label htmlFor="optionTwo">{question.optionTwo.text}?</label>
                <br/>
                <Button
                    type="submit">
                    Submit
                </Button>
            </form>
        </Flex>
    )
}

export default PollForm;