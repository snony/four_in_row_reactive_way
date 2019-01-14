import React from 'react';
import { columns } from './constants'

const Circle = ({ value, onClick, onGetClassName }) => {
    const className = onGetClassName(value);
    const click = () => onClick(value);
    const name = className === null ? "circle col" : className;
    return <button className={name} onClick={click}></button>

}

class Row extends React.Component {

    renderCircle(i) {
        return (
            <Circle key={i} value={i}
                onClick={this.props.onClick}
                onGetClassName={this.props.onGetClassName}
            />
        );
    }

    render() {
        const rowId = this.props.row;
        return (
            <div className="row">
                {columns.map(col => this.renderCircle(rowId * 6 + col + rowId))}
            </div>
        );
    }
}

export default Row;