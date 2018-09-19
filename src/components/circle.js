import React from 'react';


const Circle = ({value,onClick,onGetClassName}) =>{
    const className = onGetClassName(value);
    const click = ()=>onClick(value);
    const name = className === null? "circle col":className;
    return <button className={name} onClick={click}></button>

}

export default Circle;