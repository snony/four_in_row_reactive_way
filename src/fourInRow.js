import React from 'react';
import {Board} from './components/index'


class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            gameOver: false,
            playersTurn:0,
        }
    }

    isGameStillOn = (circles)=>{
        //check if the game is over
    }

    setNextPlayerTurn = (playersTurn)=>{
        this.setState({playersTurn});
    }
    render(){
        return (
        <div className="flex-container">
            <div className="foo">
                <h1>Welcome to Four in a Row Implemented in React</h1>
            </div>
            {!this.state.gameOver? <Board isGameOver={this.isGameStillOn}/>:<div className='GameOver'>Game Over!!</div>}
        </div>)
    }
}

export default Game;