import React from "react";
// import nanoid from 'nanoid';

export default function Quiz(props){
 let answers = props.q.answers

  return (
    <div>
      <div>
        <h3>{props.q}</h3>
        <button>{answers}</button>
      </div>
      <div>
        <h3>You scored {props.correct} correct answers</h3>
      </div>
    </div>
  );
}
