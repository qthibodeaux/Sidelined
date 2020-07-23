import React, { useState } from "react";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { connect } from 'react-redux';
import ToggleButton from 'react-bootstrap/ToggleButton';


function Win (props) {

  function newSelection ()  {
    props.dispatch({type: 'SETWIN', win: props.radio.value})
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

const ConnectedWin = connect()(Win)

function WinButtons () {
  const [checked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  
  
  
  const radios = [
    { name: 'Win', value: 'player1' },
    { name: 'Lose', value: 'player2' },
    { name: 'Tie', value: 'Tie' },
  ];
  

  return (
    <>
      <ButtonGroup toggle>
        {radios.map((radio, idx) => (
            <ConnectedWin radio={radio} idx={idx} radioValue={radioValue} checked={checked} setRadioValue={setRadioValue}/>
        ))}
      </ButtonGroup>
    </>
  )
}

const ConnectedWinButtons = connect()(WinButtons)

export default ConnectedWinButtons