import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

function ClickStart (props) {
    const myStyle = {
        height: '400px'
    }

    function startThisThing () {
        props.dispatch({type: 'START'})
    }

    return (
        <Container fluid>
            <Row style={myStyle} className="justify-content-md-center align-items-center">
                <Col xs lg="2">
                    <Button size="lg" onClick={startThisThing} variant="secondary">
                        Click to begin
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}
  
const ConnectedClickStart = connect()(ClickStart)

export default ConnectedClickStart