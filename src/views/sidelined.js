import React from "react";
import { connect } from 'react-redux';
import { ClickStart, Battle } from "../components";

function MainContent (props) {

    let cmp = <h1 style={{backgroundColor: 'red', padding: '20px', fontWeight: 600, color: '#fff'}}>Developer Error: invalid tabId!</h1>
    if (props.currentScreen === 'START') cmp = <ClickStart />
    else if (props.currentScreen === 'BATTLE') cmp = <Battle />

    return (
        <main>
            {cmp}
        </main>
    )
}

function Sidelined (props) {
    return (
        <div>
            <MainContent currentScreen={props.currentScreen} />
        </div>
    )
}

function mapStateToProps (currentReduxStoreState, _ownProps) {
    return {
        currentScreen: currentReduxStoreState.screenState.battle
    }
}

const ConnectedSidelined = connect(mapStateToProps)(Sidelined)

export default ConnectedSidelined