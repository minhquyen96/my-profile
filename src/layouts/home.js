import React from 'react';
import {Layout} from 'antd';

import styled from 'styled-components';

const CustomLayout = styled(Layout)`
    background: none;
`

const HomeLayout = props => {
    const Container = props.component;
    return (
        <CustomLayout className="layout">
            <Container component={props.component} route={props.route}/>
        </CustomLayout>
    );
};

export default HomeLayout;
