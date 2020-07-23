import React from "react";
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function FinalStats (props) {
    var stats = ""
    var p1 = ""

    if(parseInt(props.oneCoins) > parseInt(props.twoCoins)) {
        stats = "Congrats on the victory!"
        p1 = "Player1 wins with a total amount of " + props.oneCoins + "."
    }else if(parseInt(props.oneCoins) < parseInt(props.twoCoins)) {
        stats = "Try again next time!"
        p1 = "Player2 wins with a total amount of " + props.twoCoins + "."
    } else {
        stats = "The match ended in a tie"
    }


    
    

    function Restart () {
        props.dispatch({type: 'RESTART'})
    }

    console.log(props.oneCoins)
    console.log(props.twoCoins)

    return (
        <Container className="d-flex flex-column align-items-center" fluid>
            
            <Row>
                <Col>
                    {stats}
                </Col>
            </Row>
            <Row>
                <Col>
                    {p1}
                </Col>
            </Row>
            <Row>
                <Col>
                <Button
                    active
                    variant="secondary"
                    onClick={Restart}
                >
                    Click to restart
                </Button>
                </Col>
            </Row>
        </Container>
    )
}

function mapStateToProps (currentReduxStoreState, _ownProps) {
    return {
        oneCoins: currentReduxStoreState.oneCoins,
        twoCoins: currentReduxStoreState.twoCoins,
    }
}

const ConnectedFinalStats = connect(mapStateToProps)(FinalStats)

export default ConnectedFinalStats
