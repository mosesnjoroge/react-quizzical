import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

export default function Menu(props) {


  return(

    <div className='homepage'>
      <div className='homepage-icon d-flex'>
        <FontAwesomeIcon icon={faPenToSquare} bounce size = "xl" style={{color: "#594dda",}} />
      </div>
      <h2 className='page-title'>Welcome to Quizzical</h2>
      <div>
        <Button variant = 'outline-primary' onClick={() => props.start()}>Start</Button>
      </div>
      <div>

      </div>
    </div>
  )
}
