import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Circle extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            active: false,
            className:"circle col",
        }
    }

    setClassName(){
        console.log("Hellow");
        this.setState({className:"circle col yellow"});
    }
    render(){
        const name = this.state.className;
        console.log(this.props.value);
        return (
            <button className={name} onClick={()=>this.setClassName()}>{this.props.value}</button>
        );
    }
}


class Row extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            circles: Array(7).fill(null),
        };
        
    }

    handleClick(i){
        const circles = this.state.circles.slice();
        circles[i] = 'X';
        this.setState({circles: circles});
    }
    renderCircle(i){
        return (
            <Circle value={this.state.circles[i]}
            onClick = {() => this.handleClick(i)}
            />
        );
    }

    render(){
        return (
            <div className="row">
                {this.renderCircle(0)}
                {this.renderCircle(1)}
                {this.renderCircle(2)}
                {this.renderCircle(3)}
                {this.renderCircle(4)}
                {this.renderCircle(5)}
                {this.renderCircle(6)}
            </div>
        );
    }
}

class Board extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            circles:Array(42).fill(null),
            nextPlayer: 0,
        };
    }

    render(){
        const nextPlayer = 0;
        return (

            <div>
            <div className="foo">
                <h1>Welcome to Four in a Row Implemented in React</h1>
            </div>
            <div>
                Next Turn : <div className="circle col yellow"></div>
            </div>
            <Row value={{id:0, nextPlayer}}/>
            <Row value={{id:1, nextPlayer}}/>
            <Row value={{id:2, nextPlayer}}/>
            <Row value={{id:2, nextPlayer}}/>
            <Row value={{id:2, nextPlayer}}/>
            <Row value={{id:2, nextPlayer}}/>
        </div>
        );
    }
}

ReactDOM.render(<Board />, document.getElementById('root'));
