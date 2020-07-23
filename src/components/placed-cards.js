import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

function PlacedCards (props) {
    return (
        <ListGroup horizontal>
            {
                props.placedCards.map((element) => {
                    return <ListGroup.Item><Image src={element.pic} rounded style={{ width: '8rem' }}/></ListGroup.Item>
                })
            }
        </ListGroup>
    )
}

export default PlacedCards