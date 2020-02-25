import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Box } from 'reflexbox/styled-components';
import styled from 'styled-components';
import Divider from '../../components/Divider';

const StyledH2 = styled.h2`
    margin: 0 0 1rem 0;
`;

const StyledP = styled.p`
    font-weight: bold;
    margin-bottom: 0.5rem;
`;

const VoteCount = styled.p`
    font-style: italic;
    font-size: 0.875rem;
    text-align: center;
    margin: 0.5rem 0 0 0;
`;

const PercentageBar = styled.div`
    background-color: #efefef;
    background-image: ${props => `linear-gradient(to right, rgba(118, 230, 213, 1) ${props.val}%, rgba(68,84,114,0) ${props.val}%)`};
    position: relative;
    padding: 0.75rem;
    border-radius: 15px;
    font-size: 0.875rem;
    &:after {
        content: '';
    }
`;

function PollResults(props) {
    const { question } = props;
    const authedUser = useSelector(state=>state.users[state.authedUser]);
    const optionOne = question.optionOne;
    const optionTwo = question.optionTwo;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;

    const votePercentage = option => {
        return option.votes.length / totalVotes * 100;
    }

    return (
        <Flex flexDirection="column">
            <StyledH2>Results:</StyledH2>
            <Box py={3}>
                <StyledP>Would you rather {optionOne.text}?</StyledP>
                <PercentageBar val={votePercentage(optionOne)}>
                    {votePercentage(optionOne)}%
                </PercentageBar>
                <VoteCount>{optionOne.votes.length} of {totalVotes} votes</VoteCount>
            </Box>
            <Divider my={3} alignItems="center">
                OR
            </Divider>
            <Box py={3}>
                <StyledP>Would you rather {optionTwo.text}?</StyledP>
                <PercentageBar val={votePercentage(optionTwo)}>
                    {votePercentage(optionTwo)}%
                </PercentageBar>
                <VoteCount>{optionTwo.votes.length} of {totalVotes} votes</VoteCount>
            </Box>
        </Flex>
    )
}

export default PollResults;