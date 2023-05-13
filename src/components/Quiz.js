import { nanoid } from "nanoid";
import React from "react";
import RadioButton from "./RadioButton";
// import { ButtonGroup } from "react-bootstrap";
// import  Button  from "react-bootstrap/Button";

export default function Quiz(props){

  let answers = props.q.answers

  // handling answer selection
  function handleAnswerChange(answer) {
    if (props.q.checked && props.q.answers !== undefined){
      return
    }
    props.setChecked(true)
    props.handleClickAnswer(props.id, answer)
  }
  // rendering answer elements
    const answerElements = answers.map(answer => {
      let id = null;
      if (props.q.checked){
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
        <div className="btn-group-horizontal" role="group" >

            <RadioButton
              key={nanoid()}
              id={id}
              onChange={handleAnswerChange}
              >
                {answer}
            </RadioButton>
        </div>
      )
    })

  return (
    <div className="question-container">
      <div>
        <h3 className="question-title mt-3 mb-3">{props.q.question}</h3>
      </div>
      <div className="m-2 d-flex justify-content-between">
        {answerElements}
      </div>
    </div>
  )
}
