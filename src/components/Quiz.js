import React from "react";
import { nanoid } from "nanoid";
// import { ButtonGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

// import RadioButton from "./quizcomponents/RadioButton";



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
          <Button
            key={nanoid()}
            id= {id}
            variant="outline-primary"
            onClick = {() => handleClick(answer)}>
              {answer}
          </Button>
        // <ButtonGroup>
        // </ButtonGroup>
      )
    })

  return (
    <div className="question-container">
      <div className="outline-danger">
        {props.q.question}
      </div>
      <div className="pr-2 m-2">
        {answersElements}
      </div>
    </div>
  )
}
