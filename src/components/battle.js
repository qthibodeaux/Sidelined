import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PlacedCards, BattlePane, FinalStats } from "../components";
import Fade from 'react-bootstrap/Fade';

function BottomContent (props) {
    let cmp = <h1 style={{backgroundColor: 'red', padding: '20px', fontWeight: 600, color: '#fff'}}>Developer Error: invalid tabId!</h1>
    if (props.currentScreen === 'BATTLE') cmp = <BattlePane />
    else if (props.currentScreen === 'FINAL') cmp = <FinalStats />

    return (
        <main>
            {cmp}
        </main>
    )
}

function battle (props) {
        return (
            <Jumbotron fluid>
                <Container>
                    <Row>
                        <Fade in={props.open}>
                            <Col className="d-flex flex-column align-items-center">
                                <Row>   
                                    {props.winStatement}
                                </Row>
                                <Row>   
                                    {props.oneBetStatement}
                                </Row>
                                <Row>   
                                    {props.twoBetStatement}
                                </Row>
                                <Row>   
                                    {props.moneyStatement}
                                </Row>
                                <Row>
                                    <PlacedCards placedCards={props.playedTwo} />
                                </Row>
                                <Row>
                                    <PlacedCards placedCards={props.playedOne} />
                                </Row>
                            </Col>
                        </Fade>
                    </Row>
                    <Row className="d-flex flex-column align-items-center">
                        <BottomContent currentScreen={props.info}/>
                    </Row>
                </Container>
            </Jumbotron>
        )
};

function mapStateToProps (currentReduxStoreState, _ownProps) {
    return {
        info: currentReduxStoreState.screenState.info,
        playedOne: currentReduxStoreState.playedOne,
        playedTwo: currentReduxStoreState.playedTwo,
        winStatement: currentReduxStoreState.winStatement,
        oneBetStatement: currentReduxStoreState.oneBetStatement,
        twoBetStatement: currentReduxStoreState.twoBetStatement,
        moneyStatement: currentReduxStoreState.moneyStatement,
        open: currentReduxStoreState.open
    }
}

const ConnectedBattle = connect(mapStateToProps)(battle)

export default ConnectedBattle