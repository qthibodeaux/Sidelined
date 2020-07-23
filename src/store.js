import { createStore } from 'redux';
import { deck, setDeck, setKnown, getPers, cardWinChance, checkToAdd, checkWin, pc2, allBid, player2Logic, getplayer2Hand, empty} from './PowerLogic'

const initialState = {
    deck: deck,
    handOne: [],
    handTwo: [],
    playedOne: [],
    playedTwo: [],
    playerTwoAggro: 0,
    oneWager: 0,
    twoWager: 0,
    oneCoins: 0,
    twoCoins: 0,
    round: 0,
    tie: 0,
    pot: 4,
    turn: 0,
    pers: 0,
    oneBet: 'player1',
    twoBet: 'player2',
    winStatement: '',
    oneBetStatement: '',
    twoBetStatement: '',
    moneyStatement: '',
    victory: false,
    winner: '',
    selection: false,
    removeIdx: false,
    predictedWinner: 'Win',
    matchwinner: '',
    finish: false,
    hideButton: true,
    selected: false,
    isDisabled: true,
    potDis: '',
    open: false,
    known: [
        ['🔴','🔴'],
        ['❤️','❤️'],
        ['⚫','⚫'],
        ['🟡','🟡'],
        ['🔵','🔵'],
    ],
    screenState: {
        battle: 'START',
        info: 'BATTLE',
    }
}


function deepCopy (x) {
    return JSON.parse(JSON.stringify(x))
}

const reducer = (currentState, action) => {
    // set the state to initialState if this is our first run
    if (!currentState) currentState = initialState

    let nextState = deepCopy(currentState)

    const type = action.type
    // sanity-check that the action.type is a string
    if (action && typeof type !== 'string') {
      console.error('[Developer Error] action.type is not a string:', action)
    }

    if (type === 'START') {
        nextState.handOne = setDeck(nextState.deck)
        nextState.handTwo = setDeck(nextState.deck)
        nextState.screenState.battle = 'BATTLE'
        nextState.known = setKnown(nextState.playedOne, nextState.playedTwo, nextState.handOne)
        nextState.pers = getPers(nextState.handOne, nextState.playedTwo, nextState.playedOne)
        nextState.playerTwoAggro = player2Logic()
        cardWinChance(nextState.handOne, nextState.pers)
        cardWinChance(nextState.handTwo, nextState.pers)
    } else if (type === 'RESTART') {
        nextState = initialState
    }
    else if (type === 'SELECTION') {
        nextState.selection = action.item
        nextState.removeIdx = action.index
        nextState.selected = true
        nextState.isDisabled = checkToAdd(nextState.selected, nextState.wagered)
    } else if  (type === 'ADDTOLINE') {
        nextState.open = true
        var play = getplayer2Hand(nextState.playerTwoAggro, nextState.handTwo)
        nextState.playedOne.push(nextState.handOne[nextState.removeIdx])
        nextState.handOne.splice(nextState.removeIdx,1)
        nextState.playedTwo.push(nextState.handTwo[play])
        nextState.handTwo.splice(nextState.handTwo[play],1)
        nextState.known = setKnown(nextState.playedOne, nextState.playedTwo, nextState.handOne)
        nextState.pers = getPers(nextState.handOne, nextState.playedTwo, nextState.playedOne)
        nextState.selected = false
        nextState.matchwinner = checkWin(nextState.playedOne[nextState.round].name, nextState.playedTwo[nextState.round].name)
        nextState.round++
        nextState.potDis = pc2(nextState.matchwinner, nextState.oneBet, nextState.twoBet)
        
        if(nextState.matchwinner === 'Tie') {nextState.winStatement = "The card battle resulted in a tie."}
        else {nextState.winStatement = nextState.matchwinner+" is the winner of the card battle."}

        if (nextState.potDis === 'both') {
            var alBid = allBid(nextState.oneWager, nextState.oneCoins)
            var total = 0
            total = parseInt(nextState.pot) + alBid + parseInt(nextState.twoWager)
            total = parseInt(total/2) 
            nextState.oneCoins += total
            nextState.twoCoins += total
            nextState.moneyStatement = "The pot of " + nextState.pot + " will be split."
            nextState.pot = 4
            nextState.oneBetStatement = "Both bid on " + nextState.matchwinner
            nextState.twoBetStatement = ""
        } else if(nextState.potDis === 'player1') {
            let wagerTotal = parseInt(nextState.pot) + parseInt(nextState.oneWager) + parseInt(nextState.twoWager)
            nextState.oneCoins += wagerTotal
            nextState.moneyStatement = "The pot of " + wagerTotal + " goes to Player1."
            nextState.pot = 4
            nextState.oneBetStatement = "Player 1 made a correct bet and wins the pot."
            nextState.twoBetStatement = "Player 2 did not make the correct assumption."
            if(nextState.twoBet === '3') {nextState.twoCoins = 0}
        } else if(nextState.potDis === 'player2') {
            let wagerTotal = parseInt(nextState.pot) + parseInt(nextState.oneWager) + parseInt(nextState.twoWager)
            nextState.twoCoins += wagerTotal
            nextState.moneyStatement = "The pot of " + wagerTotal + " goes to Player2."
            nextState.pot = 4
            nextState.oneBetStatement = "Player 1 did not make the correct assumption."
            nextState.twoBetStatement = "Player 2 made a correct bet and wins the pot."
            if(nextState.oneBet === '3') {nextState.oneCoins = 0}
        } else {
            nextState.oneBetStatement = "Both players failed to make the correct assumption."
            nextState.twoBetStatement = ""
            nextState.pot += parseInt(nextState.oneWager) + parseInt(nextState.twoWager) + 4
            nextState.moneyStatement = "The pot for the next round is " + nextState.pot + "."
        }
        
        cardWinChance(nextState.handOne, nextState.pers)
        nextState.finish = empty(nextState.handOne)
        if(nextState.finish === true) {nextState.screenState.info = 'FINAL'}
    } else if (type === 'SETWAGER') {
        nextState.oneWager = action.wager
    } else if (type === 'SETWIN') {
        nextState.oneBet = action.win
    } 

    return nextState
}

const theStore = createStore(reducer)

export default theStore