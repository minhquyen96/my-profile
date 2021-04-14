import React from 'react';
import {Row, Col, Divider} from 'antd';
import styled from 'styled-components';
import ReactPlayer from "react-player";
import avatar from '../../../assets/img/home1.png';
import { AudioList, ListSection, ListItem } from '../../../assets/unc-react-audio-list/dist';
import image from '../../../assets/img/2.jpg';
import audio from '../../../assets/audio/audio.mp3';
import {checkScreen} from "../../../helpers/functions";

const Section = styled(Row)`
    align-items: center;
    height: ${checkScreen(window.screen.width) !== 'small' && checkScreen(window.screen.width) !== 'medium' ? '750px' : 'auto'};
    
    .unc-audio-list {
        margin-top: 10px;
        width: 100%;
        border: 2px solid #b2bec3;
    }
    .unc-audio-list-sections {
        overflow: hidden;
    }
    .unc-header-title {
        font-family: fontThuPhap2;
        font-size: 30px;
        small {
          font-family: fontThuPhap;
        }
    }
    .unc-audio-title {
        display: none;
    }    
    .unc-list-title {
       font-family: fontThuPhap;
    }
`

const SideBackground = styled(Col)`
    background-image: url(${avatar});
    height: 750px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    font-size: 40px;
    border: 2px solid #b2bec3;
    color: #ffffff;
`

class Home extends React.Component {
    render() {
        return  (
            <Section>
                <Col xs={24} xl={12} style={{display: 'flex', alignItems: 'center', flexDirection: 'column', padding: '20px'}}>
                    <ReactPlayer
                        style={{border: '2px solid #b2bec3'}}
                        width='100%'
                        height='390px'
                        url="https://www.youtube.com/watch?v=LqKyWDutNMM"
                    />
                    <AudioList headerImageSrc={image} style={{width: '100%'}}>
                        <ListSection file={audio} title="Chill with me">
                            <ListItem start="0" end="262" title="Fiction Sad Beat" />
                            <ListItem start="263" end="484" title="I Want You To Know" />
                        </ListSection>

                        <ListSection file="audio.ogg" title="">
                        </ListSection>
                    </AudioList>
                </Col>
                <SideBackground xs={24} xl={12} className="font-thu-phap2">
                    <Divider style={{backgroundColor: '#b2bec3', width: '50%', height: '10px'}} />
                    Front End Developer
                    <Divider style={{backgroundColor: '#b2bec3', width: '50%', height: '10px'}} />
                </SideBackground>
            </Section>
        );
    }
}

export default Home;
