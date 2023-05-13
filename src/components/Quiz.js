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

          <div
            key={nanoid()}
            id={id}
            variant="outline-light"
            onClick={() => handleClick()}
            // onChange={(e) => props.setChecked(e.currentTarget.props.checked)}
            >
            <div class="btn-group-vertical" role="group" aria-label="Horizontal radio toggle button group">
              <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1" autocomplete="off" checked/>
              <label class="btn btn-outline-danger" for="vbtn-radio1">{answer}</label>
            </div>

              {/* {answer} */}
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
