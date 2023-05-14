import { React } from "react";


export default function RadioButton(props) {

  return (
    <div>
      <label
        button={{ color: 'success', variant: 'outline' }}
        type="radio"
        name= {props.answerElements}
        // id={props.id}
        autoComplete="off"
        label={props.answerElements}
        onChange={props.handleAnswerChange}
        defaultChecked
        />
    </div>
  )
}
