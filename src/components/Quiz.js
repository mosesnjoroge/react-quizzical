import React from "react";
import { nanoid } from "nanoid";
import { Button, ButtonGroup } from "react-bootstrap";
// import RadioButton from "./quizcomponents/RadioButton";
// import { CFormLabel } from '@coreui/react'


export default function Quiz(props){

  let answers = props.q.answers

  // handling answer selection
  function handleClick(answer) {
    if (props.q.checked){
      return
    }
    props.handleClickAnswer(props.id, answer)
  }

  // rendering answer elements
    const answersElements = answers.map(answer => {
      let id = null;
      if (props.q.checked){
        if (props.q.correct ===answer){
          id = 'correct'
        }
        else if (props.q.selected ===answer){
          id = 'incorrect'
        }
        else {
          id = 'not-selected'
        }
      }

      return (
        <ButtonGroup >
          <Button
            className="btn btn-outline-primary active"
            data-bs-toggle="button"
            key={nanoid()}
            id= {id}
            onClick = {() => handleClick(answer)}>
              {answer}
          </Button>
        </ButtonGroup>
      )
    })

  return (
    <div className="question-container">
      <div className="outline-danger">
        {props.q.question}
      </div>
        {answersElements}
    </div>
  )
}
