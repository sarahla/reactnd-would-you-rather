import React from 'react';
import { Flex, Box } from 'reflexbox/styled-components';
import styled from 'styled-components';
import Avatar from '../../components/Avatar';

const CardContainer = styled(Flex)`
    border: 2px solid #000;
    border-radius: 15px;
    position: relative;
`;

const AvatarContainer = styled(Box)`
    h3 {
        margin: 0;
    }
`;

const CornerBanner = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #f9f097;
    display: block;
    font-weight: bold;
    border-radius: 15px 0 0 0;
    padding: 0.5rem 2rem 2rem 0.5rem;
    clip-path: polygon(0 0, 0% 100%, 100% 0);

`;

const StyledHR = styled.hr`
    border: none;
    border-top: 2px solid #000;
`;

const Stat = styled(Box)`
    .stat-number,
    .total-number{
        font-weight: bold;
        font-size: 2rem;
        margin: 0;
    }
    .total-number {
        font-size: 3.5rem;
    }
    .stat-label {
        text-transform: uppercase;
        font-size: 0.85rem;
        font-weight: 700;
        letter-spacing: 0.05em;
    }
`;

function ScoreCard(props) {
    const { index, user, questions, answers, total } = props;    
    return (
        <CardContainer p={3} my={3} alignItems="center">
            <AvatarContainer width={1/3} textAlign="center">
                <CornerBanner>
                    #{index + 1}
                </CornerBanner>
                <Avatar user={user} width="75px"/>
                <h3>{user.name}</h3>
            </AvatarContainer>
            <Box width={1/3} px={3}>
                <Stat>
                    <p className="stat-number">{questions}</p>
                    <p className="stat-label">Questions</p>
                </Stat>  
                <StyledHR />
                <Stat>
                    <p className="stat-number">{answers}</p>
                    <p className="stat-label">Answers</p>
                </Stat>
            </Box>
            <Box width={1/3} textAlign="center">
                <Stat>
                    <p className="total-number">{total}</p>
                    <p className="stat-label">Total</p>
                </Stat>
            </Box>
        </CardContainer>
    )
}

export default ScoreCard;