import React, { useState } from 'react';
import {Flex, Box} from 'reflexbox/styled-components';
import styled from 'styled-components';
import Tab from './Tab';

const TabList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    position: relative;
    top: 2px;
`;

const TabContainer = styled(Box)`
    border-top: 2px solid #000;
`;

function Tabs(props) {
    const {children} = props;
    const [activeTab, setActiveTab] = useState(children[0].props.id);

    return (
        <Flex flexDirection="column" my={5}>
            <TabList>
               {children.map(tab => {
                    const { label, id } = tab.props;
                    return (
                        <Tab
                            activeTab={activeTab === id}
                            key={id}
                            label={label}
                            onClick={() => setActiveTab(id)}
                        />
                    )
                })} 
            </TabList>
            <TabContainer p={3}>
                {children.map(tab => {
                    const { id, children } = tab.props;
                    if (id === activeTab) {
                        return children;
                    }
                    return null;
                })} 
            </TabContainer>
        </Flex>
    )
}

export default Tabs;