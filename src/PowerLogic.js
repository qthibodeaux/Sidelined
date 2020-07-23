var deck = [
    {
        name: 'Red',
        win: [],
        pic: 'red.jpg',
    },
    {
        name: 'Red',
        win: [],
        pic: 'red.jpg',
    },
    {
        name: 'Blue',
        win: [],
        pic: 'blue.jpg',
    },
    {
        name: 'Blue',
        win: [],
        pic: 'blue.jpg',
    },
    {
        name: 'Black',
        win: [],
        pic: 'black.jpg',
    },
    {
        name: 'Black',
        win: [],
        pic: 'black.jpg',
    },
    {
        name: 'Yellow',
        win: [],
        pic: 'yellow.jpg',
    },
    {
        name: 'Yellow',
        win: [],
        pic: 'yellow.jpg',
    },
    {
        name: 'Pink',
        win: [],
        pic: 'pink.jpg',
    },
    {
        name: 'Pink',
        win: [],
        pic: 'pink.jpg',
    },
]

function setDeck (deck) {
    var newHand = []
    for(let i = 0; i < 3; i++){
        const ran = getRandom(deck.length)
        newHand.push(deck[ran])
        deck.splice(ran, 1)
    }

    return newHand
}

function getRandom (max) {
    return Math.floor(Math.random() * max)
}

function setKnown (played, played2, hand) {
    var known = [
        ['🔴','🔴'],
        ['❤️','❤️'],
        ['⚫','⚫'],
        ['🟡','🟡'],
        ['🔵','🔵'],
    ]

    var colors = [0,0,0,0,0]

    checkHand(played, colors)
    checkHand(played2, colors)
    checkHand(hand, colors)
    known = changeEmoji(known, colors)
    
    return known
}

function checkHand (deck, color){
    if (typeof(deck) === undefined) return deck
    else {
        deck.forEach(element => {
            switch (element.name) {
                case 'Red': color[0]=color[0]+1; break;
                case 'Pink': color[1]=color[1]+1; break;
                case 'Black': color[2]=color[2]+1; break;
                case 'Yellow': color[3]=color[3]+1; break;
                case 'Blue': color[4]=color[4]+1; break;
                default: return 0;
            }
        });
    }
}

function changeEmoji (known, colors) {
    known.forEach((element, index) => {
        if (colors[index] === 1) {
            element[0] = '⬜'
        } else if (colors[index] === 2) {
            element[0]='⬜'
            element[1]='⬜'
        }
    })

    return known
}

function getPers (played, played2, hand) {
    var colors = [0,0,0,0,0]
    var total = 0
    checkHand(played, colors)
    checkHand(played2, colors)
    checkHand(hand, colors)

    colors.forEach((element) => {
        total = total + element
    })
    var newColors = colors.map((element) => {
        return percentage(element, total)
    })
    return newColors
}

function percentage (element, stage) {
    var diz = 1
    if(element === 0) { diz = 2 }
    else if (element === 2) {diz = 0}
    return parseInt((diz / (10 - stage)) * 100);
}

function cardWinChance (hand, pers) {
    hand.forEach((element) => {
        if(element.name === 'Red'){
            winChance(element, pers, 1,3,2,4,0)
        } else if(element.name === 'Pink') {
            winChance(element, pers, 2,4,0,3,1)
        } else if(element.name === 'Black') {
            winChance(element, pers, 3,0,1,4,2)
        } else if(element.name === 'Yellow') {
            winChance(element, pers, 4,1,0,2,3)
        }else if(element.name === 'Blue') {
            winChance(element, pers, 0,2,1,3,4)
        }
    })
}



function winChance(element, pers, color1, color2, color3, color4, tie) {
    element.win[0] = pers[color1] + pers[color2]
    element.win[1] = pers[color3] + pers[color4]
    element.win[2] = pers[tie]
}

function checkToAdd (select) {
    if (select === true) {
        return false
    } else {
        return true
    }
}

function checkWagerTotal (wager, totalWager) {
    var wagerAmount = 0
    if (wager === 0)  {
        wagerAmount = 0
    }else  if (wager === 1) {
        wagerAmount = 2
    } else {
        wagerAmount = totalWager
    }

    return wagerAmount
}

function addToPot (playerWager) {
    return 1 + playerWager
}

function checkWin (card1, card2) {
    var win = ''

    if (card1 === 'Red') {
        if(card2 ==='Pink' || card2 === 'Yellow'){
            win = 'player1'
        } else if (card2 === 'Black' || card2 === 'Blue') {
            win = 'player2'
        } else {
            win = 'Tie'   
        }
    } else if (card1 === 'Pink') {
        if(card2 ==='Pink' || card2 === 'Yellow'){
            win = 'player2'
        } else if (card2 === 'Black' || card2 === 'Blue') {
            win = 'player1'
        } else {
            win = 'Tie'   
        }
    } else if (card1 === 'Black') {
        if(card2 ==='Red' || card2 === 'Yellow'){
            win = 'player1'
        } else if (card2 === 'Pink' || card2 === 'Blue') {
            win = 'player2'
        } else {
            win = 'Tie'   
        }
    } else if (card1 === 'Yellow') {
        if(card2 ==='Pink' || card2 === 'Blue'){
            win = 'player1'
        } else if (card2 === 'Black' || card2 === 'Red') {
            win = 'player2'
        } else {
            win = 'Tie'   
        }
    } else if (card1 === 'Blue') {
        if(card2 ==='Pink' || card2 === 'Yellow'){
            win = 'player2'
        } else if (card2 === 'Black' || card2 === 'Red') {
            win = 'player1'
        } else {
            win = 'Tie'   
        }
    }

    return win
}

function pc2 (prediction, onePredict, twoPredict) {
    var ret
    if (onePredict === prediction && twoPredict === prediction) {
        ret = 'both'
    } else if (onePredict === prediction) {
        ret = 'player1'
    } else if (twoPredict === prediction) {
        ret = 'player2'
    } else {
        ret = 'neither'
    }
    return ret
}

function allBid (bid, coins) {
    var returnBid
    if (parseInt(bid) === 3) {
        if (parseInt(coins) === 0) {returnBid = 0}
        else returnBid = parseInt(coins)
    }

    return returnBid
}

function player2Logic () {
    return getRandom(1)
}

function getplayer2Hand (type, deck) {
    var max = 0
    var indexOfCard

    if(type === 0 ){
        deck.forEach((element, index) => {
            if(element.win[0] > max) {
                max = element.win[0]
                indexOfCard = index
            }
        })
    } else {
        deck.forEach((element, index) => {
            if(element.win[0] > max) {
                max = element.win[1]
                indexOfCard = index
            }
        })
    }
    return indexOfCard
}


function empty (hand) {
    if(hand.length === 0) return true
}

export { deck, setDeck, getRandom, setKnown, getPers, cardWinChance, checkToAdd, checkWagerTotal, addToPot, checkWin, pc2, allBid, player2Logic, getplayer2Hand, empty}