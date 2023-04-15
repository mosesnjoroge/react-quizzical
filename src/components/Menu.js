import React from 'react';
// import  Button  from 'react-bootstrap/Button';

export default function Menu(props) {

  return(
      <div className='homepage'>
        <h2>Welcome to Quizical</h2>
        <div>
          <button onClick={props.handleSubmit}>Start</button>
        </div>
      </div>
  )
}
