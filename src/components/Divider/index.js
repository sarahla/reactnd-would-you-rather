import React from 'react';
import { Flex } from 'reflexbox/styled-components';
import styled from 'styled-components';

const StyledDivider = styled(Flex)`
    font-weight: bold;
    &:before,
    &:after {
        content: '';
        flex-grow: 1;
        display: block;
        border-top: 1px solid #ddd;
        margin: 0 10px;
    }
`

function Divider(props) {
    return (
        <StyledDivider my={3} alignItems="center"> { props.text ? props.text : 'OR' } </StyledDivider>
    )
}

export default Divider;