import React from 'react';
import { Button } from 'react-bootstrap';


export default function Menu(props) {

  return(

      <div className='homepage'>

        <h2 className='page-title'>Welcome to Quizzical</h2>
        <div>
          <Button variant = 'outline-primary' onClick={() => props.start()}>Start</Button>
        </div>
      </div>
  )
}
