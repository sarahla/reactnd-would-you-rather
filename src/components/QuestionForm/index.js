import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { handleSaveQuestion } from '../../actions/questions'
import { Flex, Box } from 'reflexbox/styled-components';
import styled from 'styled-components';
import Divider from '../../components/Divider';
import Button from '../../components/Button';

const StyledInput = styled.input`
    font-family: inherit;
    padding: 1rem 1rem 1rem 0;
    border: 0;
    flex-grow: 1;
    font-size: 1.2rem;
    color: #000;
    border-bottom: 2px solid black;

    &:focus {
        outline: none;
        border-color: #bbb;
    }
`;

const StyledP = styled.p`
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0 0 0 1rem;
`;

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
        <form onSubmit={handleSubmit}>
            <Flex flexDirection="column">
                <Flex alignItems="flex-end" my={2}>
                    <StyledInput 
                    type="text" 
                    name="optionOneText" 
                    id="optionOneText" 
                    placeholder="Enter Option One Here" 
                    onChange={handleChange}/>
                    <StyledP>&hellip; ?</StyledP>
                </Flex>
                <Box alignSelf="center" maxWidth="100px">
                    <Divider>OR</Divider>
                </Box>
                <Flex alignItems="flex-end" mb={4}>
                    <StyledInput 
                        type="text" 
                        name="optionTwoText" 
                        id="optionTwoText" 
                        placeholder="Enter Option Two Here"
                    onChange={handleChange}/>  
                    <StyledP>&hellip; ?</StyledP>     
                </Flex>
                <Box alignSelf="center">
                    <Button>Submit your question!</Button>
                </Box>
            </Flex>
        </form>
    )   
}

export default QuestionForm;