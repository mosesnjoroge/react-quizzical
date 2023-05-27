import React from "react";
import { nanoid } from "nanoid";
import Button from "react-bootstrap/Button";

export default function Quiz(props){

  // handling answer selection
  let answers = props.q.answers
  function handleClick(answer) {
    if (props.q.checked){
      return false
    }
    props.handleClickAnswer(props.id, answer)
  }

  // rendering answer elements
    const answersElements = answers.map(answer => {
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
        <Button
          key={nanoid()}
          id= {id}
          variant="outline-primary"
          onClick = {() => handleClick(answer)}>
            {answer}
        </Button>
      )
    })

  return (
    <div className="quiz-container">
      <div className="outline-danger">
        {props.q.question}
      </div>
      <div className="d-flex justify-content-start gap-3 pr-3 m-2">
        {answersElements}
      </div>
    </div>
  )
}
