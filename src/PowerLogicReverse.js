var deck = [
    {
        name: 'Red',
        win: []
    },
    {
        name: 'Red',
        win: []
    },
    {
        name: 'Blue',
        win: []
    },
    {
        name: 'Blue',
        win: []
    },
    {
        name: 'Black',
        win: []
    },
    {
        name: 'Black',
        win: []
    },
    {
        name: 'Yellow',
        win: []
    },
    {
        name: 'Yellow',
        win: []
    },
    {
        name: 'Pink',
        win: []
    },
    {
        name: 'Pink',
        win: []
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
    
    console.log("Known "+known)

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

    console.log("pers "+newColors)
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

/*
    red > pink , yellow | 14 % tie, 42% win, 42% lose
    pink > black, blue | 
    black > yellow, red | 14% tie, 28% win, 56% lose
    yellow > blue, pink | 14% tie, 56% win, 28% lose
    blue > red, black |
*/

export { deck, setDeck, getRandom, setKnown, getPers, cardWinChance }

