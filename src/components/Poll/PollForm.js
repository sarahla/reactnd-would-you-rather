import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleSaveAnswer } from '../../actions/questions'
import { Flex, Box } from 'reflexbox/styled-components';
import styled from 'styled-components';
import Divider from '../../components/Divider';
import Button from '../../components/Button';
import RadioButton from '../../components/RadioButton';

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
                <Flex flexDirection="column">
                    <Box py={3}>
                        <RadioButton 
                            name={question.id} 
                            id="optionOne" 
                            value="optionOne" 
                            onChange={handleChange}
                            text={`${question.optionOne.text}?`}
                        />
                    </Box>
                    <Divider>OR</Divider>
                    <Box py={3} mb={3}>
                        <RadioButton 
                            name={question.id} 
                            id="optionTwo" 
                            value="optionTwo" 
                            onChange={handleChange}
                            text={`${question.optionTwo.text}?`}
                        />
                    </Box>
                    <Button
                        type="submit">
                        Submit
                </Button>
                </Flex>
            </form>
        </Flex>
    )
}

export default PollForm;