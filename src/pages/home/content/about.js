import React from 'react';
import {Row, Col} from 'antd';
import styled from 'styled-components';
import image from '../../../assets/img/image.jpg';
import cv from '../../../assets/Do-Minh-Quyen.pdf'
import {checkScreen} from "../../../helpers/functions";

const Section = styled(Row)`
    align-items: center;
    height: 750px;
`

const ImageContainer = styled.div`
    position: relative;
    display: block;
    max-width: 440px;
    margin: 0 auto;
    &:before {
        border: 6px solid #2196F3;
        display: inline-block;
        position: ${checkScreen(window.screen.width) !== 'small' && checkScreen(window.screen.width) !== 'medium' ? 'absolute' : 'relative'};
        content: '';
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        transform: translate3d(26px, 26px, -26px);
    }
`

const Image = styled.img`
    max-width: 100%;
    height: auto;
    margin: 0 auto 30px;
`

const Text = styled.p`
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
`

class About extends React.Component {
    render() {
        const download = () => {
            setTimeout(() => {
                const response = {
                    file: cv,
                };
                window.open(response.file);
            }, 100);
        }

        return  (
            <Section>
                <Col xs={24} xl={12}>
                    <ImageContainer>
                        <Image src={image} alt="avatar"/>
                    </ImageContainer>
                </Col>
                <Col xs={24} xl={12}>
                    <Row justify="space-between" style={{paddingLeft: '10px'}}>
                        <Col xs={24} lg={12}>
                            <Row>
                                <Col xs={8}>
                                    <Text>Full name</Text>
                                </Col>
                                <Col xs={16}>
                                    <Text>Đỗ Minh Quyền</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={8}>
                                    <Text>Birthdate</Text>
                                </Col>
                                <Col xs={16}>
                                    <Text>14 june 1996</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={8}>
                                    <Text>Phone</Text>
                                </Col>
                                <Col xs={16}>
                                    <a href="tel:0972796574"><Text>0972796574</Text></a>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={8}>
                                    <Text>Address</Text>
                                </Col>
                                <Col xs={16}>
                                    <Text title="105 Doãn Kế Thiện, Mai Dịch, Cầu Giấy, Hà Nội">105 Doãn Kế Thiện, Mai Dịch, Cầu Giấy, Hà Nội</Text>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={24} lg={12}>
                            <Row>
                                <Col xs={8}>
                                    <Text>Mail</Text>
                                </Col>
                                <Col xs={16}>
                                    <a href="mailto:quyen.minh96@gmail.com"><Text title="quyen.minh96@gmail.com">quyen.minh96@gmail.com</Text></a>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={8}>
                                    <Text>Skype</Text>
                                </Col>
                                <Col xs={16}>
                                    <Text title="quyen.minh96@gmail.com">quyen.minh96@gmail.com</Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={8}>
                                    <Text>Facebook</Text>
                                </Col>
                                <Col xs={16}>
                                    <a target="_blank" href="https://www.facebook.com/minh.quyen1996/" title="https://www.facebook.com/minh.quyen1996/"><Text>minh.quyen1996</Text></a>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={8}>
                                    <Text>Youtube</Text>
                                </Col>
                                <Col xs={16}>
                                    <a target="_blank" href="https://www.youtube.com/channel/UCQmyqXgdA7kT7YtVJH1GGxA" title="https://www.youtube.com/channel/UCQmyqXgdA7kT7YtVJH1GGxA"><Text>Minh Quyền</Text></a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{display: 'flex', justifyContent: 'center'}}>
                        <button className="glow-on-hover" type="button" onClick={download}>DOWNLOAD CV</button>
                    </Row>
                </Col>
            </Section>
        );
    }
}

export default About;
