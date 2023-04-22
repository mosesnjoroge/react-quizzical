import React from 'react';

export default function Menu(props) {


  return(
      <div className='homepage'>
        <h2 className='page-title'>Welcome to Quizical</h2>
        <div>
          <button onClick={() => props.start()}>Start</button>
        </div>
      </div>
  )
}
