import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-family: inherit;
    background-color: #fd5f7e;
    font-weight: 900;
    color: #ffffff;
    font-size: 1rem;
    border: none;
    padding: 0.75rem 1.5rem;
    text-transform: uppercase;
    border-radius: 0.5rem;
    transition: all 300ms ease-in-out;
    cursor: pointer;

    &:hover {
        background-color: #76e6d5;
    }
`;

function Button(props) {
    return <StyledButton {...props}> {props.children} </StyledButton>
}

export default Button;