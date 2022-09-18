import React, { useState, useEffect } from "react"
import { Btn } from "./btn/Btn"
import { Reset } from "./longbtn/Reset"
import { Equal } from "./longbtn/Equal"
import "./Table.scss"
import { useSelector, useDispatch } from "react-redux"
import { assign_current_value } from "../../store/calculatorSlice"

// we are a bunch of docile, fat-bellied, people :)
// in the end, its the fat belly that matters

// i love Cevapi and Burek bro. i eat it all the time.

export const Table = () => {
  const dispatch = useDispatch()
  // const current_value = useSelector(current_value_selector)

  const [number, setNumber] = useState("")
  const [memory, setMemory] = useState([])

  const numberClickHandler = (value) => {
    const new_number = number + value.toString()
    setNumber(new_number)
  }

  const expressionHandler = (expression) => {
    setMemory([...memory, number, expression])
    setNumber("")
  }

  const equalHandler = () => {
    const final_value = eval(memory.join("") + number)
    console.log(final_value)
    dispatch(assign_current_value(final_value))
  }

  return (
    <div className="table">
      {memory}

      <div className="sm-btn">
        <button onClick={() => numberClickHandler(9)}>9</button>
        <button onClick={() => numberClickHandler(8)}>8</button>
        <button onClick={() => numberClickHandler(7)}>7</button>

        <Btn value="DEL" />

        <button onClick={() => numberClickHandler(6)}>6</button>
        <button onClick={() => numberClickHandler(5)}>5</button>
        <button onClick={() => numberClickHandler(4)}>4</button>

        {/*<button onClick={() => additionHandler()}>+</button>*/}
        <button onClick={() => expressionHandler("+")}>+</button>

        <button onClick={() => numberClickHandler(3)}>3</button>
        <button onClick={() => numberClickHandler(2)}>2</button>
        <button onClick={() => numberClickHandler(1)}>1</button>

        {/*<Btn value="-" />*/}
        <button onClick={() => expressionHandler("-")}>-</button>

        {/*<Btn value="." />*/}
        <button onClick={() => expressionHandler(".")}>.</button>

        <button onClick={() => numberClickHandler(0)}>0</button>

        {/*<Btn value="/" />*/}
        <button onClick={() => expressionHandler("/")}>/</button>

        <Btn value="x" />
        <button onClick={() => expressionHandler("x")}>x</button>
      </div>

      <div className="long-btn">
        <Reset />

        <button onClick={equalHandler}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </button>
      </div>
    </div>
  )
}
