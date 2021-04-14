import React from 'react';
import {Row, Col} from 'antd';
import styled from 'styled-components';
import game1 from '../../../assets/img/game1.png';
import game2 from '../../../assets/img/game2.png';
import game3 from '../../../assets/img/game3.png';
import {checkScreen} from "../../../helpers/functions";

const Section = styled(Row)`
    padding-top: 20px;
    padding-bottom: 20px;
    align-items: center;
    height: 750px;
`

const Container = styled(Col)`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
`

const ContainerGame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
`

const Title = styled.h2`
    font-size: 25px;
    color: ${checkScreen(window.screen.width) !== 'small' && checkScreen(window.screen.width) !== 'medium' ? '#ffffff' : '#000000'};
`

const Description = styled.p`
    font-size: 16px;
    color: ${checkScreen(window.screen.width) !== 'small' && checkScreen(window.screen.width) !== 'medium' ? '#ffffff' : '#000000'};
`

class Games extends React.Component {
    render() {
        return  (
            <Section>
                {(checkScreen(window.screen.width) === 'small' || checkScreen(window.screen.width) === 'medium') &&
                    <h1 style={{textAlign: 'center', marginLeft: 'auto', marginRight: 'auto'}} className="font-thu-phap">GAMES</h1>
                }
                <Container xs={24} xl={12} style={{marginTop: '15px'}}>
                    <ContainerGame>
                        <Image src={game1} />
                        <Title className="font-thu-phap">Ninja Shuriken</Title>
                        <Description>Mini-game shooting monsters to meet boss.</Description>
                        <button className="glow-on-hover" type="button" onClick={() => window.open('/dist/ninja-shuriken')}>PLAY</button>
                    </ContainerGame>
                </Container>
                <Container xs={24} xl={12} style={{marginTop: '15px'}}>
                    <ContainerGame>
                        <Image src={game2} />
                        <Title className="font-thu-phap">Air Striker</Title>
                        <Description>Airplane shooting game, item system, planes and bosses with music effects.</Description>
                        <button className="glow-on-hover" type="button" onClick={() => window.open('/dist/air-striker')}>PLAY</button>
                    </ContainerGame>
                </Container>
                <Container xs={24} xl={12} style={{marginTop: '15px'}}>
                    <ContainerGame>
                        <Image src={game3} />
                        <Title className="font-thu-phap">Super Breaker</Title>
                        <Description>Mini game, simulate the classic brick breaking game.</Description>
                        <button className="glow-on-hover" type="button" onClick={() => window.open('/dist/super-breaker')}>PLAY</button>
                    </ContainerGame>
                </Container>
            </Section>
        );
    }
}

export default Games;
