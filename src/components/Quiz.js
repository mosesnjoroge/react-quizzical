import React,{useState} from "react";
import { nanoid } from "nanoid";
// import RadioButton from "./quizcomponents/RadioButton";


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
        <div className="btn-group-horizontal" role="group" >

            <label

              type="radio"
              name= {answer}
              id={id}
              autoComplete="off"
              label={answer}
              onChange={handleAnswerChange}
              defaultChecked

              key={nanoid()}
              // id= {id}
              value = {answer}
              handleClick = {() => handleClick()}
              // onChange={handleAnswerChange}
            />
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
