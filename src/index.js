import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rows = [0,1,2,3,4,5];
const column = [0,1,2,3,4,5,6];

class Circle extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            active: false,
            className:"circle col",
        }
    }

    setClassName = ()=>{
        const value = this.props.value;
        const cPlayer = this.props.playerColor();
        const className = cPlayer?"circle col yellow":"circle col green";
        this.setState({className});
        this.props.onClick(value);
    }
    render(){
        const name = this.state.className;
        return (
            <button className={name} onClick={this.setClassName}>{this.props.value}</button>
        );
    }
}


class Row extends React.Component{
    
    
    renderCircle(i){
        return (
            <Circle key={i} value={i}
                onClick = {this.props.onClick}
                playerColor={this.props.playerColor}
            />
        );
    }

    render(){
        const rowId = this.props.row;
        return (
            <div className="row">
                {column.map(col => this.renderCircle(rowId*6 + col))}
            </div>
        );
    }
}



class Board extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            circles:Array(42).fill(null),
            nextPlayer: true,
            lastRowToBeFilled: 6,
        };
    }

    onClick = (id)=>{
        const color = this.state.nextPlayer;
        console.log(color);
        const nextPlayer = !this.state.nextPlayer;
        //it is here that we should set the class
        const circles = this.state.circles;
        console.log(circles);
        this.setState({nextPlayer});
    }

    playerColor = ()=>{
        return this.state.nextPlayer;
    }

    render(){
        return (
            <div>
                <div className="foo">
                    <h1>Welcome to Four in a Row Implemented in React</h1>
                </div>
                <div>
                    Next Turn : <div className="circle col yellow"></div>
                </div>
                {rows.map(row => <Row key={row} row={row} onClick={this.onClick} playerColor={this.playerColor}/>)}
            </div>
        );
    }
}

ReactDOM.render(<Board />, document.getElementById('root'));