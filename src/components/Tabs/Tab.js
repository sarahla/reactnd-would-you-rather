import React, { useState } from 'react';
import {Flex, Box} from 'reflexbox/styled-components';
import styled from 'styled-components';

const StyledListItem = styled.li`
    padding: 1rem;
    &.activeTab {
        font-weight: bold;
        border: 2px solid #000;
        border-bottom: 0;
        border-radius: 15px 15px 0 0;
        background: #fff;
    }
`;

function Tab(props) {
    const { label, onClick, activeTab } = props;
    console.log(activeTab);

    return (
        <StyledListItem onClick={onClick} className={activeTab ? 'activeTab' : null}>
            { label } 
        </StyledListItem>
    )
}

export default Tab;