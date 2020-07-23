import React from "react";
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

function KnownBar (props) {
    var known = props.known

    return (
        <ListGroup>
            <ListGroup.Item style={{background: 'black', color: 'white'}}><strong>Card Chance</strong></ListGroup.Item>
            <ListGroup.Item style={{background: '#ff0000'}}>{known[0][0]} | {known[0][1]} <strong>Red chance {props.pers[0]}%</strong></ListGroup.Item>
            <ListGroup.Item style={{background: '#ffc0cb'}}>{known[1][0]} | {known[1][1]} <strong>Pink chance {props.pers[1]}%</strong></ListGroup.Item>
            <ListGroup.Item style={{background: '#808080'}}>{known[2][0]} | {known[2][1]} <strong>Black chance {props.pers[2]}%</strong></ListGroup.Item>
            <ListGroup.Item style={{background: '#ffff00 '}}>{known[3][0]} | {known[3][1]} <strong>Yellow chance {props.pers[3]}%</strong></ListGroup.Item>
            <ListGroup.Item style={{background: '#72bcd4'}}>{known[4][0]} | {known[4][1]} <strong>Blue chance {props.pers[4]}%</strong></ListGroup.Item>
        </ListGroup>
    )
}

function mapStateToProps (currentReduxStoreState, _ownProps) {
    return {
        known: currentReduxStoreState.known,
        pers: currentReduxStoreState.pers,
    }
}

const ConnectedKnownBar = connect(mapStateToProps)(KnownBar)

export default ConnectedKnownBar