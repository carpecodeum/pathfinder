import React,{Component} from 'react'
import './node.css'

export default class Node extends Component{
    render(){
        const {col,isFinish,isStart,isWall,onMouseDown,onMouseEnter, onMouseUp,row,} = this.props;
        const extraClassName = isFinish? 'node-finish': isStart? 'node-start': isWall ? 'node-wall': '';
        return(<div id={`node-${row}-${col}`} className={`node ${extraClassName}`} onMouseDown={() => onMouseDown(row, col)} onMouseEnter={() => onMouseEnter(row, col)} onMouseUp={() => onMouseUp()}>
        </div>)
    }
}

export const default_node={
    row:0,
    cols:0
}