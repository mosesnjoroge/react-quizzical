import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import blobShape from '../images/blob-shape.png'

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
      <div className='homepage-blob'>
        <img src={blobShape} alt="yellow blob from vecteezy.com" /> <a href="https://www.vecteezy.com/free-png/element">Element PNGs by Vecteezy</a>
      </div>
    </div>
  )
}
