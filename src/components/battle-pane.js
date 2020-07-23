import React from "react";
import { connect } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { WagerButtons, WinButtons, KnownBar, InfoPane } from "../components";


function BattleCard  (props) {
    const newSelection = () => {
        props.dispatch({type: 'SELECTION', item: props.element, index: props.index})
    }



    return(
        <ListGroup.Item
            action 
            onClick={newSelection}
            className="d-flex flex-column align-items-center"
        >
            <Card style={{ width: '9rem' }}>
                <Card.Img variant="top" src={props.element.pic} />
                <Card.Body>
                    <Card.Title>{props.element.name}</Card.Title>
                    <Card.Text style={{ fontSize: 12}}>
                        Chance to win: {props.element.win[0]}
                    </Card.Text>
                    <Card.Text style={{ fontSize: 12}}>
                        Chance to lose: {props.element.win[1]}
                    </Card.Text>
                    <Card.Text style={{ fontSize: 12}}>
                        Chance to tie: {props.element.win[2]}
                    </Card.Text>
                </Card.Body>
                </Card>
            
        </ListGroup.Item>
    )
}

const ConnectedBattleCard = connect()(BattleCard)

function BattlePane (props) {
    return (
        <Container >
            <Row className="justify-content-md-center">
                <Col xs={3}>
                    <KnownBar />
                </Col>
                <Col className="d-flex flex-column align-items-center">
                    <Row >
                        <ListGroup horizontal>
                            {props.handOne.map((element, index)=>{
                                return <ConnectedBattleCard index={index} element={element} />
                            })}
                        </ListGroup>
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <WagerButtons />
                    </Row>
                    <Row className="d-flex justify-content-center">
                        <WinButtons />  
                    </Row>
                    <Row>
                    <div className="d-flex flex-row justify-content-center">
                        <Image src="beats.jpg" rounded style={{ width: '20rem' }}/>
                    </div>
                    </Row>
                    
                </Col>
                <Col xs={3}>
                    <InfoPane />
                </Col>
            </Row>
        </Container>
    )
}

function mapStateToProps (currentReduxStoreState, _ownProps) {
    return {
        handOne: currentReduxStoreState.handOne,
    }
}

const ConnectedBattlePane = connect(mapStateToProps)(BattlePane)

export default ConnectedBattlePane