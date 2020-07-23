import React from "react";
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { AddButton } from "../components";
import ListGroup from 'react-bootstrap/ListGroup'

function InfoPane (props) {
    var win = 0
    if (props.oneBet === 'player1') win = 'Win'
    else if (props.oneBet === 'player2') win = 'Lose'
    else win = 'Tie'

    var wag = 0
    if (parseInt(props.oneWager) === 1) {wag = 0}
    else if (parseInt(props.oneWager) === 2) {wag = 2}
    else if (parseInt(props.oneWager) === 3) {wag = props.oneCoins}
    
    return (
        <Container className="d-flex flex-column justify-content-space-between">
            <ListGroup>
                <ListGroup.Item style={{background: 'black', color: 'white'}}><strong>Sidelined</strong></ListGroup.Item>
                <ListGroup.Item><strong>Round: {props.round}</strong></ListGroup.Item>
                <ListGroup.Item><strong>Pot: {props.pot}</strong></ListGroup.Item>
                <ListGroup.Item><strong>Player1 Bet: {win}</strong></ListGroup.Item>
                <ListGroup.Item><strong>Player1 Wager: {wag}</strong></ListGroup.Item>
                <ListGroup.Item><strong>Player1 Coins: {props.oneCoins}</strong></ListGroup.Item>
                <ListGroup.Item><strong>Player2 Coins: {props.twoCoins}</strong></ListGroup.Item>
                <ListGroup.Item><AddButton /></ListGroup.Item>
            </ListGroup>
        </Container>
    )
}

function mapStateToProps (currentReduxStoreState, _ownProps) {
    return {
        round: currentReduxStoreState.round,
        pot: currentReduxStoreState.pot,
        oneWager: currentReduxStoreState.oneWager,
        twoWager: currentReduxStoreState.twoWager,
        oneBet: currentReduxStoreState.oneBet,
        twoBet: currentReduxStoreState.twoBet,
        oneCoins: currentReduxStoreState.oneCoins,
        twoCoins: currentReduxStoreState.twoCoins,
    }
}

const ConnectedInfoPane = connect(mapStateToProps)(InfoPane)

export default ConnectedInfoPane