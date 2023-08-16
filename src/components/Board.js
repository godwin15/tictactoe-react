
import "./Board.css"
import { Box } from "./Box"

import React from 'react'

export const Board = ({board, onClick}) => {
  return (
    <div className="board">
    {board.map((value, idx) =>{
        return <Box value={value} onClick={()=> value === null && onClick(idx)}/>
    }) }
    </div>
  )
}

