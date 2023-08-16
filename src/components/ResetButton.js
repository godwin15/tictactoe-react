import "./ResetButton.css";
import React from 'react'

export const ResetButton = ({resetBoard}) => {
  return (
    <button className="reset-btn" onClick = {resetBoard} > Reset </button>
  )
}
