import React,{useState} from "react";
import { nanoid } from "nanoid";
// import RadioButton from "./quizcomponents/RadioButton";
import { CFormLabel } from '@coreui/react'


export default function Quiz(props){

  const [value, setValue] = useState()

  let answers = props.q.answers

  // handling answer selection
  function handleClick(answer) {
    props.handleClickAnswer(props.id, answer)
  }
  // handle value variable answer

  function handleAnswerChange(){

    const value = props.q.selected
    setValue(!value)
  }

  // rendering answer elements
    const answerElements = answers.map(answer => {
      let id = null;
      if (props.q.checked && answer === value){
        if (props.q.correct === answer){
          id = 'correct'
        }
        else if (props.q.selected === answer){
          id = 'incorrect'
        }
        else {
          id = 'not-selected'
        }
      }

      return (
        <div >
          <button>
            key={nanoid()}
            id= {id}
            value = {answer}
            handleClick = {() => handleClick()}
            onChange={handleAnswerChange}

          </button>

        </div>
      )
    })

  return (
    <div className="question-container">
      <label className="outline-danger">
        {props.q.question}
      </label>

      <CFormLabel
        type="radio"
        name={value}
        id={props.id}
        autoComplete="off"
        label={answerElements}
      />

    </div>
  )
}
