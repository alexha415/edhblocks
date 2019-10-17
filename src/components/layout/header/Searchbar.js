import React,{useState, Fragment} from 'react'

import {connect} from 'react-redux';
import {searchCards} from '../../../actions/searchActions';
import './searchbar.css';

const Searchbar = ({ searchCards, colorId }) => {

  const [text, setText] = useState('');

  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    searchCards({
      q: `=${text}`,
      identity: `%3D${colorId}`
    });
    setText('');
  }

  return (
    <Fragment>
      <form onSubmit={onSubmit} style={{width: '100%'}}>
        <div className="input-group search-bar">   
          <input type="text" className='form-control' value={text} htmlFor='text' placeholder='Search...' name='text' onChange={onChange}/>
          <div className="input-group-append">
            <a href="#/" className='btn btn-outline-secondary' onClick={onSubmit}>
              <i className='fa fa-search' style={{height: '100%'}}></i>
            </a>
          </div>  
        </div>
      </form>
    </Fragment>
  )
}

export default connect(state => ({
  colorId: state.deck.colorId
}), {searchCards})(Searchbar)
