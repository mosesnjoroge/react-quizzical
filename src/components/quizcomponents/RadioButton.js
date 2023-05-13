import { React } from "react";

export default function RadioButton(props) {

  return (
    <div>
      <label>
        <input type="radio" checked={props.value} onChange={props.handleAnswerChange} />
      </label>
    </div>
  )
}
