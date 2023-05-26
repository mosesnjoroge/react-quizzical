import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function Menu(props) {

  return(

      <div className='homepage'>
        <FontAwesomeIcon icon={faPenToSquare} bounce style={{color: "#594dda",}} />
        <h2 className='page-title'>Welcome to Quizzical</h2>
        <div>
          <Button variant = 'outline-primary' onClick={() => props.start()}>Start</Button>
        </div>
      </div>
  )
}
