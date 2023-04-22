import { nanoid } from "nanoid";
import React from "react";
// import nanoid from 'nanoid';

export default function Quiz(props){

  let answers = props.q.answers
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
      <button key={nanoid()} id={id} className={answer === props.q.selected? "answer selected" : "answer"}>{answer}</button>
    )
  })

  return (
    <div>
      <div>
        <h3>{props.q.question}</h3>
        {answerElements}
      </div>
    </div>
  );
}
