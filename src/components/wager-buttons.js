import React, { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { connect } from 'react-redux';
import ToggleButton from 'react-bootstrap/ToggleButton';


function Wag (props) {

  function newSelection ()  {
    props.dispatch({type: 'SETWAGER', wager: props.radio.value})
  }

  return (
    <ToggleButton
      key={props.idx}
      type="radio"
      variant="secondary"
      name="radio"
      value={props.radio.value}
      checked={props.radioValue === props.radio.value}
      onChange={(e) => {
        props.setRadioValue(e.currentTarget.value)
        newSelection()
      }}
    >
      {props.radio.name}
    </ToggleButton>
  )
}

const ConnectedWag = connect()(Wag)

function WagerButtons () {
  const [checked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  
  
  
  const radios = [
    { name: 'None', value: '1' },
    { name: 'Two', value: '2' },
    { name: 'All', value: '3' },
  ];
  

  return (
    <>
      <ButtonGroup toggle>
        {radios.map((radio, idx) => (
            <ConnectedWag radio={radio} idx={idx} radioValue={radioValue} checked={checked} setRadioValue={setRadioValue}/>
        ))}
      </ButtonGroup>
    </>
  )
}

const ConnectedWagerButtons = connect()(WagerButtons)

export default ConnectedWagerButtons