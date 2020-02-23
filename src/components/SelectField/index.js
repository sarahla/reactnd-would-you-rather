import React from 'react';
import styled from 'styled-components';

const StyledSelectField = styled.select`
	appearance: none;
	background-color: #FFF;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%233BCEAC%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
	background-position: right .7em top 50%;
	background-repeat: no-repeat;
	border-radius: 0.5rem;
	border: 1px solid #DDD;
	box-sizing: border-box;
	color: #444;
	font-family: sans-serif;
	font-size: 16px;
	font-weight: 900;
	line-height: 1.3;
	margin: 0;
	max-width: 100%;
	padding: .6em 1.4em .5em .8em;
	width: 100%;
    background-size: .65em auto, 100%;
    display: block;
    
    &:hover {
        border-color: #888;
    }

    &:focus {
        outline: none;
        border-color: #888;
    }

    .select-css option {
        font-weight:normal;
    }
`;

function SelectField(props) {
    return <StyledSelectField {...props}> {props.children} </StyledSelectField>
}

export default SelectField;