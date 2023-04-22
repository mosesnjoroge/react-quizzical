import { nanoid } from "nanoid";
import React from "react";


export default function Quiz(props){

  let answers = props.q.answers

  function handleClick(answer) {
    if (props.q.checked){
      return
    }
    props.handleClickAnswer(props.id, answer)
  }

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
      <button
        key={nanoid()}
        id={id}
        className={answer === props.q.selected? "answer selected" : "answer"}
        onClick={() => handleClick(answer)}
        >
          {answer}
      </button>
    )
  })

  return (
    <div className="question-container">
      <h3 className="question-title">{props.q.question}</h3>
      {answerElements}
      <div className="line"></div>
    </div>
  )
}
