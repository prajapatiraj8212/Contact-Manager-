import React from 'react'
import spin1 from '../../assests/img/spin1.gif'

let Spinner = () => {
  return (
    <React.Fragment>
     <div>
       <img 
        className='d-block m-auto' style={{width:'200px'}}
        src={spin1} alt="loading" />
       
     </div>
    </React.Fragment>
  )
}

export default Spinner
