import React from 'react';
import { Button } from 'react-bootstrap';
import { CIcon } from '@coreui/icons-react';
import { cilPencil } from '@coreui/icons';

export default function Menu(props) {

  return(
      <div className='homepage'>
        <CIcon icon={cilPencil} style={{color: "#5b4ce2;",}} />
        <h2 className='page-title'>Welcome to Quizzical</h2>
        <div>
          <Button variant = 'outline-primary' onClick={() => props.start()}>Start</Button>
        </div>
      </div>
  )
}
