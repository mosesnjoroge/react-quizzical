import { nanoid } from "nanoid";
import React from "react";
import { ButtonGroup } from "react-bootstrap";
import  Button  from "react-bootstrap/Button";

export default function Quiz(props){

  let answers = props.q.answers

  // answer validation
  function handleClick(answer) {
    if (props.q.checked && props.q.answers !== undefined){
      return
    }
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
        <ButtonGroup>
          <Button
            key={nanoid()}
            id={id}
            variant="outline-light"
            className={answer === props.q.selected? "answer selected" : "answer"}
            onClick={() => handleClick(answer)}
            defaultValue={props.q.answers[0]}
            // onChange={(e) => props.setChecked(e.currentTarget.props.checked)}
            >
              {answer}
          </Button>
        </ButtonGroup>
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
