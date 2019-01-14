import React from 'react';
import { rowsStuff, colStuff, rows } from './constants'
import Row from './rows'
import CurrentPlayer from './CurrentPlayer'

/**
* What is the board class responsible for?
*/
class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            circles: Array(42).fill(null),
            nextPlayer: true
        };
    }


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
        const rowNumByCircleID = getRowNumberByCircleID(circleID);
        this.setCircleClass(circleID, rowNumByCircleID);

    }

    getClassName = (circleID) => {
        return this.state.circles[circleID];
    }


    render() {
        const { nextPlayer } = this.state
        return (
            <div>
                <CurrentPlayer nextPlayer={nextPlayer} />
                <div className="rowsWrapper">
                    {rows.map(row => <Row key={row} row={row} onClick={this.onClick} onGetClassName={this.getClassName} />)}
                </div>
            </div>
        );
    }
}

const getRowNumberByCircleID = (circleID) => {
    let whichRow = 0;
    for (const row of rows) {
        if (circleID >= rowsStuff[row] && circleID <= colStuff[row]) {
            whichRow = row;
            break;
        }
    }
    return whichRow;
}

export default Board;