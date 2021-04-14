import React, {useEffect, useState} from 'react';
import Slider from "react-slick";
import { Row, Col, Image, Button } from 'antd';
import styled from 'styled-components';
import image1 from '../../assets/img/1.jpg';
import image2 from '../../assets/img/2.jpg';
import image3 from '../../assets/img/3.jpg';
import image4 from '../../assets/img/4.jpg';
import image5 from '../../assets/img/5.jpg';
import image6 from '../../assets/img/6.jpg';
import avatar from '../../assets/img/avatar.jpg';
import Content from "./content/content";
import {checkScreen} from "../../helpers/functions";

const Banner = styled.div`
    display: block; 
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    height: ${checkScreen(window.screen.width) !== 'small' ? '500px' : '330px'};
`

const CustomRow = styled(Row)`
    background-color: #282C34;
    border-bottom: 5px solid #ecf0f1;
    padding: 2px;
`

const CustomAvatar = styled(Row)`
    margin-top: -100px;
    align-items: center;
    background-color: #282C34;
`

const CustomImage = styled(Image)`
    border-radius: 10px;
    border: 5px solid #ffffff;
`

const TextHi = styled.div`
    color: rgb(236, 240, 241);
    font-size: 35px;
    margin-top: 40px;
    text-align: right;
    @media (max-width: 768px) {
        text-align: center;
        font-size: 20px;
    }
    @media (max-width: 767px) {
        margin-top: 0px;
    }
`

const TextIam = styled.div`
    color: rgb(236, 240, 241);
    display: flex;
    font-size: 25px;
    margin-top: 40px;
    text-align: left;
    @media (max-width: 768px) {
        margin-left: 50px;
        font-size: 20px;
        text-align: center;
    }
    @media (max-width: 767px) {
        margin-left: 120px;
        margin-top: 0px;
    }
    
    div {
        display: flex;
        align-items: flex-end;
        margin-bottom: 6px;
        @media (max-width: 768px) {
            margin-bottom: 0px;
        }
    }
`

const ImageBanner = styled(Image)`
    border: 1px solid #ddd;
    padding: 5px;
    height: ${checkScreen(window.screen.width) !== 'small' ? '500px' : '330px'};
    width: 100%;
    object-fit: cover;
`

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

const texts = ['Minh Quyền', 'A Developer'];

const MemoizedContent = React.memo(Content);

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      widthOfName: 0,
      distance: -3,
      text: texts[0],
    }
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myRef.current = setInterval(() => {
      if (this.state.widthOfName <= 0 || this.state.widthOfName >= 250) {
        this.setState({distance: -this.state.distance}, () => {
          this.setState({widthOfName: this.state.widthOfName + this.state.distance})
        })
      } else {
        this.setState({widthOfName: this.state.widthOfName + this.state.distance})
      }
      if (this.state.widthOfName <= 0) {
        this.setState({text: this.state.text === texts[0] ? texts[1] : texts[0]})
      }
    }, 50)
  }

  componentWillUnmount() {
    clearInterval(this.myRef.current)
  }

  render() {
    const TextName = styled.span`
        white-space: nowrap;
        font-size: 35px;
        overflow: hidden;
        margin-left: 10px;
        display: inline-block;
        text-align: left;
        width: ${this.state.widthOfName}px;
        color: #3498db;
        transition: width 0.1s;
        @media (max-width: 768px) {
            font-size: 20px;
        }
    `
    return  (
      <>
        <CustomRow justify="center">
          <Col lg={{ span: 20 }}>
            <Banner>
              <Slider {...settings}>
                <div>
                  <ImageBanner
                      src={image1}
                      placeholder={
                        <Image
                            preview={false}
                            src={image1}
                        />
                      }
                  />
                </div>
                <div>
                  <ImageBanner
                      src={image2}
                      placeholder={
                        <Image
                            preview={false}
                            src={image2}
                        />
                      }
                  />
                </div>
                <div>
                  <ImageBanner
                      src={image3}
                      placeholder={
                        <Image
                            preview={false}
                            src={image3}
                        />
                      }
                  />
                </div>
                <div>
                  <ImageBanner
                      src={image4}
                      placeholder={
                        <Image
                            preview={false}
                            src={image4}
                        />
                      }
                  />
                </div>
                <div>
                  <ImageBanner
                      src={image5}
                      placeholder={
                        <Image
                            preview={false}
                            src={image5}
                        />
                      }
                  />
                </div>
                <div>
                  <ImageBanner
                      src={image6}
                      placeholder={
                        <Image
                            preview={false}
                            src={image6}
                        />
                      }
                  />
                </div>
              </Slider>
            </Banner>
          </Col>
        </CustomRow>

        <CustomAvatar justify="center">
          <Col xs={24} md={9}>
            <TextHi className="font-thu-phap">
              Hi there !
            </TextHi>
          </Col>
          <Col xs={24} md={6}>
            <Row justify="center">
              <CustomImage
                width={250}
                height={200}
                src={avatar}
                placeholder={
                  <Image
                    preview={false}
                    src={avatar}
                    width={250}
                    height={200}
                  />
                }
              />
            </Row>
          </Col>
          <Col xs={24} md={9}>
            <TextIam>
              <div className="font-thu-phap">I'am</div><TextName className="font-thu-phap">{this.state.text}</TextName>
            </TextIam>
          </Col>
        </CustomAvatar>
        <MemoizedContent />
      </>
    );
  }
}

export default Home;
