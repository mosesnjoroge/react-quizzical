import React from 'react';
import { Button } from 'react-bootstrap';
// import { CIcon } from '@coreui/icons-react';
// import { cilPencil, cilPenAlt } from '@coreui/icons';

export default function Menu(props) {

  return(

      <div className='homepage'>
        {/* <div>
          <CIcon icon={cilPencil} size = "l"/>
          <CIcon icon={cilPenAlt } size = "l"/>
        </div> */}
        <h2 className='page-title'>Welcome to Quizzical</h2>
        <div>
          <Button variant = 'outline-primary' onClick={() => props.start()}>Start</Button>
        </div>
      </div>
  )
}
