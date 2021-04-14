import React, {useEffect, useRef, useState} from 'react';
import Slider from "react-slick";
import {Row, Col, Divider} from 'antd';
import styled from 'styled-components';
import logo from '../../../assets/img/minhquyen.jpg';
import videoBg from '../../../assets/video/videobackground.mp4';
import {checkScreen} from "../../../helpers/functions";
import About from "./about";
import Experience from "./experience";
import Home from "./home";
import Skill from "./skill";
import Games from "./games";

const MemoizedHome = React.memo(Home);

const SideBar = styled(Col)`
    background-color: #282C34;
    height: 755px;
    width: 300px;
    color: #ecf0f1;
    display: flex;
    justify-content: center;
    position: relative;
`

const ContentDashboard = styled(Col)`
    background-color: #282C34;
    height: 755px;
    width: calc(100% - 300px);
    color: #ecf0f1;
`

const ContentItem = styled.div`
    height: 750px;
    overflow-y: auto;
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: #F5F5F5;
    }
    &::-webkit-scrollbar {
        width: 10px;
        background-color: #F5F5F5;
    }
    &::-webkit-scrollbar-thumb {
        background-image: -webkit-gradient(linear,
        left bottom,
        left top,
        color-stop(0.44, rgb(122,153,217)),
        color-stop(0.72, rgb(73,125,189)),
        color-stop(0.86, rgb(28,58,148)));
    }
`

const Logo = styled.img`
    width: 100px;
    height: 100px;
    margin-top: 10px;
`

const Video = styled.video`
    border: 1px solid #ddd;
    padding: 5px;
    max-width: 300px;
    min-height: 100%;
    position: absolute;
    z-index: 1;
    object-fit: cover;
`

const OpacitySideBar = styled.div`
height: 755px;
    width: 300px;
    position: absolute;
    z-index: 2;
    background-color: black;
    opacity: 0.6;
`

const Menu = styled.div`
    position: absolute;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

// const handleWheel = (e) => {
//     if (e.wheelDelta >= 0) {
//         setTimeout(() => window.scrollTo(0, 0), 500)
//     }
//     else {
//         setTimeout(() => window.scrollTo(0, 800), 500)
//     }
// };

const Content = (props) => {
    const [slideIndex, setSlideIndex] = useState(0);

    const ref = useRef({});

    const slideGoto = (index) => {
        ref.current.slickGoTo(index);
    };

    // useEffect(() => {
    //     if (checkScreen(window.screen.width) !== 'small' && checkScreen(window.screen.width) !== 'medium') {
    //         document.addEventListener('wheel', handleWheel)
    //     }
    // }, [])

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        autoplay: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => {
            setSlideIndex(next);
        }};

    const menuItems = ['HOME', 'ABOUT', 'SKILL', 'EXPERIENCE', 'GAMES'];

    return  (
        <Row>
            {checkScreen(window.screen.width) !== 'small' && checkScreen(window.screen.width) !== 'medium'
            ? <>
                <SideBar>
                    <OpacitySideBar />
                    <Menu>
                        <Logo src={logo} alt="minhquyen"/>
                        <div style={{marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '20px'}}>
                            {menuItems.map((item, index) => {
                                return (<React.Fragment key={item}>
                                    <p className={`cursor-pointer font-thu-phap ${index === slideIndex ? 'active' : ''}`} onClick={() => slideGoto(index)}>{item}</p>
                                    {index + 1 < menuItems.length &&
                                    <Divider style={{backgroundColor: '#ffffff', margin: '0 0 1em 0'}} />
                                    }
                                </React.Fragment>)
                            })}
                        </div>
                    </Menu>
                    <Video autoPlay="autoplay" loop="loop" muted="muted" id="myVideo">
                        <source src={videoBg} type="video/mp4" />
                    </Video>
                </SideBar>
                <ContentDashboard>
                    <Slider ref={ref} {...settings}>
                        <ContentItem>
                            <MemoizedHome />
                        </ContentItem>
                        <ContentItem>
                            <About />
                        </ContentItem>
                        <ContentItem>
                            <Skill />
                        </ContentItem>
                        <ContentItem>
                            <Experience />
                        </ContentItem>
                        <ContentItem>
                            <Games />
                        </ContentItem>
                    </Slider>
                </ContentDashboard>
            </>
                :
                <>
                    <MemoizedHome />
                    <About />
                    <Skill />
                    <Experience />
                    <Games />
                </>
            }
        </Row>
    );
}

export default Content;
