import { React } from "react";
import { CFormCheck } from '@coreui/react'

export default function RadioButton(props) {

  return (
    <div>
      <CFormCheck
        button={{ color: 'success', variant: 'outline' }}
        type="radio"
        name= {props.answer}
        id={props.id}
        autoComplete="off"
        label={props.answer}
        onClick={props.handleAnswerChange}
        defaultChecked/>
    </div>
  )
}
