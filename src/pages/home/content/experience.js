import React from 'react';
import {Row, Col} from 'antd';
import styled from 'styled-components';
import { Chrono } from "react-chrono";
import {checkScreen} from "../../../helpers/functions";

const Section = styled(Row)`
    align-items: center;
    height: ${checkScreen(window.screen.width) !== 'small' && checkScreen(window.screen.width) !== 'medium' ? '750px' : 'auto'};
`

const Title = styled.h1`
    color: ${checkScreen(window.screen.width) !== 'small' && checkScreen(window.screen.width) !== 'medium' ? '#ffffff' : '#000000'};
    margin-top: 15px;
`

class Experience extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            experiences : [
                {
                    title: "07-2018",
                    cardTitle: "FPT SOFTWARE",
                    cardSubtitle:"Interns Front-end.\n" +
                        "Certificate of training Front-end developer.\n",
                    cardDetailedText: "2 months",
                    media: {
                        type: "IMAGE",
                        source: {
                            url: "b76a3cd55215024041a47bf994902ab6.jpg"
                        }
                    }
                },
                {
                    title: "12-2018",
                    cardTitle: "NTQ SOLUTION JSC",
                    cardSubtitle:"Participate in projects as Front-end and Back-end Developer.",
                    cardDetailedText: "16 months",
                    media: {
                        type: "IMAGE",
                        source: {
                            url: "b76a3cd55215024041a47bf994902ab6.jpg"
                        }
                    }
                },
                {
                    title: "3-2020",
                    cardTitle: "CMC TELECOM",
                    cardSubtitle:"Participate in projects as Front-end.\n",
                    cardDetailedText: "until now",
                    media: {
                        type: "IMAGE",
                        source: {
                            url: "b76a3cd55215024041a47bf994902ab6.jpg"
                        }
                    }
                }
            ],
            educations: [
                {
                    title: "2007",
                    cardTitle: "THCS Thạch Thất",
                },
                {
                    title: "2011",
                    cardTitle: "THPT Phùng Khắc Khoan",
                },
                {
                    title: "2014",
                    cardTitle: "Học viện Công nghệ Bưu chính Viễn thông",
                }
            ]
        }
    }

    render() {
        return  (
            <Section>
                <Col xs={24} xl={12} style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Title className="font-thu-phap">EXPERIENCE</Title>
                    <Chrono items={this.state.experiences}  mode="VERTICAL"/>
                </Col>
                <Col xs={24} xl={12} style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                    <Title className="font-thu-phap">EDUCATION</Title>
                    <Chrono items={this.state.educations}  mode="VERTICAL"/>
                </Col>
            </Section>
        );
    }
}

export default Experience;
