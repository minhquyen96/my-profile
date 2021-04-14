import React from 'react';
import {Row, Col} from 'antd';
import styled from 'styled-components';
import {Chrono} from "react-chrono";
import {checkScreen} from "../../../helpers/functions";

const Section = styled(Row)`
    height: ${checkScreen(window.screen.width) !== 'small' && checkScreen(window.screen.width) !== 'medium' ? '750px' : 'auto'};
`

const SkillContent = styled(Col)`
    margin-top: 5px;
    display: flex;
    justify-content: center;
    font-size: 20px;
`

const Title = styled.h1`
    color: ${checkScreen(window.screen.width) !== 'small' && checkScreen(window.screen.width) !== 'medium' ? '#ffffff' : '#000000'};
    margin-top: ${checkScreen(window.screen.width) !== 'small' && checkScreen(window.screen.width) !== 'medium' ? '15px !important' : '35px !important'};
`

const Container = styled(Row)`
    margin-top: ${checkScreen(window.screen.width) !== 'small' && checkScreen(window.screen.width) !== 'medium' ? '20px' : '0'};
`

class Skill extends React.Component {
    render() {
        return  (
            <Section>
                <Col xs={24} style={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'column'}}>
                    <Title className="font-thu-phap">MY SKILL</Title>
                    <Container>
                        <SkillContent xs={24} md={12} lg={8}>HTML</SkillContent>
                        <SkillContent xs={24} md={12} lg={8}>CSS</SkillContent>
                        <SkillContent xs={24} md={12} lg={8}>Javascript</SkillContent>
                        <SkillContent xs={24} md={12} lg={8}>Canvas</SkillContent>
                        <SkillContent xs={24} md={12} lg={8}>PHP</SkillContent>
                        <SkillContent xs={24} md={12} lg={8}>Git</SkillContent>
                    </Container>
                </Col>
                <Col xs={24} style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Title className="font-thu-phap">FRAME WORK</Title>
                    <Container>
                        <SkillContent xs={24} md={12} lg={8}>Angular</SkillContent>
                        <SkillContent xs={24} md={12} lg={8}>React Js</SkillContent>
                        <SkillContent xs={24} md={12} lg={8}>Next Js</SkillContent>
                        <SkillContent xs={24} md={12} lg={8}>Vue Js</SkillContent>
                        <SkillContent xs={24} md={12} lg={8}>Nuxt Js</SkillContent>
                        <SkillContent xs={24} md={12} lg={8}>Laravel</SkillContent>
                    </Container>
                </Col>
                <Col xs={24} style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Title className="font-thu-phap">LIBRARY</Title>
                    <Container>
                        <SkillContent xs={24} md={12} lg={8}>Ant Design</SkillContent>
                        <SkillContent xs={24} md={12} lg={8}>Material UI</SkillContent>
                        <SkillContent xs={24} md={12} lg={8}>Redux</SkillContent>
                        <SkillContent xs={24} md={12} lg={8}>Redux saga</SkillContent>
                        <SkillContent xs={24} md={12} lg={8}>Vue X</SkillContent>
                        <SkillContent xs={24} md={12} lg={8}>NgRx</SkillContent>
                    </Container>
                </Col>
            </Section>
        );
    }
}

export default Skill;
