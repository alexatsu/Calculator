import React from "react"
import { useSelector } from "react-redux"
import { current_value_selector } from "../../store/calculatorSlice.js"
import "./Display.scss"

export const Display = () => {
  const current_value = useSelector(current_value_selector)

  return (
    <div className="display">
      <div className="numbers">{current_value}</div>
    </div>
  )
}
