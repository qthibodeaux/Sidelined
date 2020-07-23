import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card';


function Home () {
    return (
        <Jumbotron>
            <Container style={{background: "white", backgroundBlendMode: "darken"}}>
                <Row>
                    <Col>
                        <h1>Welcome To Sidelined.</h1>
                        <h2>A Power Rangers fansite.</h2>
                        <h3>Sidelined features a fun and dynamic card game. Settle the debate who is the best Ranger! Sidelined is a Power Rangers themed version of the classic Rock Paper Scissors Lizard Spock. Sidelined introduces rounds, a set amount of choices, and wagering to add a new level of skill and gamesmanship.</h3>
                    </Col>
                </Row>
                <Row auto>
                    <h1 className="text-center">Site Features</h1>
                </Row>
                <Row>
                    <Col>
                        <CardDeck>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="sidelined.jpg" />
                                <Card.Body>
                                    <Card.Title>Sidelined</Card.Title>
                                    <Card.Text>
                                        Dynamic card game of skill and gamesmanship.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>How To Play</Card.Title>
                                    <Card.Text>
                                        <p>Sidelined is a Power Rangers themed version of the classic Rock Paper Scissors.</p>                                    
                                        <p>Instructions on how to succeed in Sidelined</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title>About</Card.Title>
                                    <Card.Text>
                                        Site information on the the site, the developer, and fanatic links.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Home