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
        <div >

            <button
              key={nanoid()}
              id= {id}
              value = {answer}
              handleClick = {() => handleClick()}
              // onChange={handleAnswerChange}
            />
        </div>
      )
    })

  return (
    <div className="question-container">
      <label className="outline-danger">
        {props.q.question}
      </label>
      <div className="m-2 d-flex justify-content-between">
        <div class="btn-group" role="group" aria-label="Vertical radio toggle button group">
          <input type="radio" class="btn-check" name="vbtn-radio" id="vbtn-radio1"  />
          <label class="btn btn-outline-danger" for="vbtn-radio1" onChange={handleAnswerChange}>{answerElements}</label>
        </div>

        {/* {answerElements} */}
      </div>
    </div>
  )
}
