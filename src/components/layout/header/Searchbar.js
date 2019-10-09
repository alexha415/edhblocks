import React,{useEffect, useState, Fragment} from 'react'

import {connect} from 'react-redux';
import {searchCards} from '../../../actions/cardActions';

const Searchbar = ({ searchCards }) => {

  const [text, setText] = useState('');

  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    searchCards(text);
    setText('');
  }


  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="input-group">   
          <input type="text" className='form-control' value={text} for='text' placeholder='Search...' name='text' onChange={onChange}/>
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

export default connect(null, {searchCards})(Searchbar)
