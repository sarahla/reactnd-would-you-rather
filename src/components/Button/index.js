import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-family: inherit;
    background-color: #EE4266;
    font-weight: 900;
    color: #ffffff;
    font-size: 1rem;
    border: none;
    padding: 0.75rem;
    text-transform: uppercase;
    border-radius: 0.5rem;
    transition: all 300ms ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #540D6E;
    }
`;

function Button(props) {
    return <StyledButton {...props}> {props.children} </StyledButton>
}

export default Button;