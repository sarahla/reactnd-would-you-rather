import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Avatar from '../Avatar';
import { Flex, Box } from 'reflexbox/styled-components';
import styled from 'styled-components';

const StyledCard = styled(Flex)`
    justify-content: stretch;
`;

const AvatarContainer = styled(Box)`
    p {
        margin: 0;
    }
`;

const QuestionContainer = styled(Box)`
    flex-grow: 1;
    .author-name {
        margin: 0 0 8px 0;
        text-transform: uppercase;
        font-size: 0.85rem;
        font-weight: 700;
        letter-spacing: 0.05em;
    }
`;

const SpeechBubble = styled(Link)`
    display: block;
    background-color: #f9f097;
    width: 100%;
    border-radius: 15px;
    position: relative;
    text-decoration: none;
    color: #000;
    transition: background-color 250ms ease-in-out;

    &::after {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        clip-path: polygon(100% 90%, 100% 0, 0 100%);
        background-color: inherit;
        position: absolute;
        right: 100%;
        bottom: 20px;
    }
    &:hover {
        background-color: #ffa2e7;
    }
    p, h4 {
        margin: 0;
    }
    a {
        text-decoration: none;
        color: #000;

        &:hover {
            text-decoration: underline;
        }
    }
`;

function QuestionCard(props) {
    const { question } = props;
    const questionAuthor = useSelector(state => state.users[question.author]);
    
    return (
        <StyledCard alignItems="flex-end" my={4}>
            <AvatarContainer mr={4}>
                <Avatar user={questionAuthor} width="75px" />
            </AvatarContainer>
            <QuestionContainer pb={4}>           
                <p className="author-name">{questionAuthor.name}:</p>
                <SpeechBubble to={`/questions/${question.id}`}>
                    <Flex p={3} width="100%">
                        <Box flexGrow="1">
                            <p>Would you rather</p>
                            <p><strong>{question.optionOne.text} or... ?</strong></p>
                        </Box>
                        <Box alignSelf="center">
                            <Link to={`/questions/${question.id}`}>
                                View Poll
                            </Link>
                        </Box>
                    </Flex>
                </SpeechBubble>
            </QuestionContainer>
        </StyledCard>
    )
}

export default QuestionCard;