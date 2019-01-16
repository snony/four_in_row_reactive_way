import React from 'react';
import { rowsStuff, colStuff, rows } from './constants'
import Row from './rows'
import CurrentPlayer from './CurrentPlayer'

const createMultiArray = () => {
    const arr = new Array(6)
    for (let m = 0; m < arr.length; m++) {
        arr[m] = new Array(7)
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = null
        }
    }
    return arr
}

/**
* What is the board class responsible for?
Laying out the rows, keeping track of the circles, displaying messages of the current state of the
game.
*/
class Board extends React.Component {
    circleChecker = null
    constructor(props) {
        super(props);
        this.state = {
            circles: Array(42).fill(null),
            nextPlayer: true
        };
        this.circleChecker = createMultiArray()
        console.log(this.circleChecker)
    }

    //TODO more like a helper function
    setCircleClass = (circleID, rowNumByCircleID) => {
        const color = this.state.nextPlayer;
        let nextPlayer = !this.state.nextPlayer;
        const circles = [...this.state.circles];
        let rowToCheck = 5;
        let isThereMoreRowsToCheck = true;
        while (isThereMoreRowsToCheck) {
            const idNotFilled = (rowToCheck - rowNumByCircleID) * 7 + circleID;
            if (circles[idNotFilled] == null) {
                circles[idNotFilled] = color ? "circle col yellow" : "circle col green";
                isThereMoreRowsToCheck = false;
            } else {
                rowToCheck -= 1;
            }

            if (rowToCheck < 0) {
                isThereMoreRowsToCheck = false;
                nextPlayer = !nextPlayer;
            }
        }
        this.setState({ nextPlayer, circles });
    }

    onClick = (circleID) => {
        const inGame = this.state.circles.filter(x => x == null).length > 0;
        if (inGame) {
            const rowNumByCircleID = getRowNumberByCircleID(circleID);
            this.setCircleClass(circleID, rowNumByCircleID);
        }

    }

    whoWon = (circleChecker, lastFillRow, lastFillCol) => {
        const newCircle = [...circleChecker]
        let someCondition = true
        let visitedSibling = {}
        while (someCondition) {

        }

    }

    getClassName = (circleID) => {
        return this.state.circles[circleID];
    }


    render() {
        const { nextPlayer, circles } = this.state
        const inGame = circles.filter(x => x == null).length > 0;
        //TODO add the column is full!
        return (
            <div>
                <div>Current Game Status: {inGame ? "Game is on" : "Game over"}</div>
                <CurrentPlayer nextPlayer={nextPlayer} />
                <div className="rowsWrapper">
                    {rows.map(row => <Row key={row} row={row} onClick={this.onClick} onGetClassName={this.getClassName} />)}
                </div>
            </div>
        );
    }
}

const getRowNumberByCircleID = (circleID) => {
    let circleIdRow = 0;
    for (const row of rows) {
        if (circleID >= rowsStuff[row] && circleID <= colStuff[row]) {
            circleIdRow = row;
            break;
        }
    }
    return circleIdRow;
}

export default Board;