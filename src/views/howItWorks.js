import React from "react";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HowItWorks () {
    return (
        <Container>
            <Row>
                <Col md='8' xs={6} style={{color: 'white'}}>
                    <h1>How To Play:</h1>
                    <p>Sidelined is a Power Rangers themed version of the classic Rock Paper Scissors.</p>
                    <p>Sidelined introduces rounds, a set amount of choices, and wagering to add a new level of skill and gamesmanship.</p>
                    <p>Played over 3 rounds: the objective is to have the most coins at the end. Each player is dealt 3 cards from a deck of 10 cards. You are then able to select a card, a wager amount, and a prediction on if you are going to win or lose.</p>
                    <br/>
                    <div className="d-flex flex-row justify-content-center">
                        <Image src="info.jpg" rounded style={{ width: '8rem' }}/>
                        <Image src="cardchance.jpg" rounded style={{ width: '8rem' }}/>
                        <Image src="cardexample.jpg" rounded style={{ width: '8rem' }}/>
                    </div>
                    <br/>
                    <p>The deck consider of 10 total cards. There are 5 types of cards, two of each in 1 deck. Using deduction and information available to you, choose which card will leave to winning the wager.</p>
                    <div className="d-flex flex-row justify-content-center">
                        <Image src="beats.jpg" rounded style={{ width: '8rem' }}/>
                    </div>
                    <div className="d-flex flex-row justify-content-center">
                    <p>Red beats Pink and Yellow</p>
                    <p>Pink beats Black and Blue</p>
                    <p>Black beats Yellow and Blue</p>
                    <p>Yellow beats Blue and Pink</p>
                    <p>Blue beats Red and Black</p>
                    </div>
                    <p>The system mirrors the Rock Paper Scissors Model to reduce the chance of a tie. To add additional complexity to the game is a wager system. Simply winning the battle is not enough, calling you opponents bluff and using deduction to try to predict the result of the battle is the key to victory. Using the information tools available to you to understand the options that are available to you and what your opponent may play is the key to victory. Dynamically adjusting statistical information is present to help make information decisions. Careful before your opponent is aware of this as well.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default HowItWorks