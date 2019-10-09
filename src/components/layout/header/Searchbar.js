import React,{useEffect, useState, Fragment} from 'react'

const Searchbar = () => {

  const [text, setText] = useState('');

  return (
    <Fragment>
      <form>
        <div className="input-group">   
          <input type="text" className='form-control'/>
          <div className="input-group-append">
            <a href="#" className='btn btn-outline-secondary'>
              <i className='fa fa-search' style={{height: '100%'}}></i>
            </a>
          </div>  
        </div>
      </form>
    </Fragment>
  )
}

export default Searchbar
