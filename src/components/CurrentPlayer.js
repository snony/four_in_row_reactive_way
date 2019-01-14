import React from 'react';


class CurrentPlayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { x: 0 }
        this.onMouseMove = this.onMouseMove.bind(this)
        this.myRef = React.createRef()
    }

    onMouseMove = (e) => {
        const { x, width } = this.myRef.current.getBoundingClientRect()
        const boundaryX = x + width
        const mouseX = e.screenX
        if (x <= mouseX && mouseX <= boundaryX) {
            const Xprcent = (mouseX - x) / width * 100
            this.setState({ x: Xprcent })
        }
    }
    render() {
        const { nextPlayer } = this.props
        const { x } = this.state
        return (
            <div className="currentPlayer">
                <h4>
                    Current Player :
                </h4>
                <div ref={this.myRef} onMouseMove={this.onMouseMove}>
                    <div style={{ transform: 'translateX(' + x + '%)', transition: 'transform 0.2s' }}>
                        <div className={nextPlayer ? "circle col yellow" : "circle col green"} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CurrentPlayer