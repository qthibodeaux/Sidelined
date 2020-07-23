import React from "react";
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';

function AddButton (props) {
    function AddToLine () {
        props.dispatch({type: 'ADDTOLINE'})
    }

    return (
        <Button
            variant="secondary"
            hidden={props.hideButton}
            disabled={props.isDisabled}
            onClick={AddToLine}
        >
            {props.isDisabled ? 'Select a card or wager' : 'Click to play and wager'}
        </Button>
    )
}

function mapStateToProps (currentReduxStoreState, _ownProps) {
    return {
        isDisabled: currentReduxStoreState.isDisabled
    }
}

const ConnectedAddButton = connect(mapStateToProps)(AddButton)

export default ConnectedAddButton