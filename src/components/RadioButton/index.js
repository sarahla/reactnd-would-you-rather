import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    position: absolute;
    visibility: hidden;

    + label {
        display: flex;
        align-items: center;
        &::before{
            content: '';
            display: inline-block;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            border: 2px solid #000;
            margin-right: 1rem;
        }
    }

    &:checked + label {
        font-weight: bold;

        &::before {
            background-color: #76e6d5;
        }
    }
`;

function RadioButton(props) {
    const { 
        name, 
        id, 
        value, 
        onChange, 
        text
    } = props;

    return (
        <Fragment>
            <StyledInput 
                name={name} 
                type="radio" 
                id={id} 
                value={value}
                onChange={onChange} 
            />
            <label htmlFor={id}>
                {text}
            </label>
        </Fragment>
    )
}

export default RadioButton;