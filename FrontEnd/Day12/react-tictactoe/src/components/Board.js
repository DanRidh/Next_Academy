import React from 'react';
import Cell from './Cell';

const Board = ({board}) => {
    return (
        <div className="board">
            {{board}.map((value, index) => {
                    return (
                    <Cell board={board} key={index} value={value} />
            )})
            }
        </div>
    )
}

export default Board;