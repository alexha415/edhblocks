import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import './searchbar.scss';

const Searchbar = ({submit, send, search: {commanders}}) => {
  
  const [text, setText] = useState('');

  //this allows search bar to reset when the search results are updated
  const searchResults = JSON.stringify(commanders);
  useEffect( () => {
    setText('');
  },[searchResults])

  useEffect( () => {
    send(text);
    //eslint-disable-next-line
  },[text]);

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    setText('');
    submit(e);
  }

  return (
    <div className="input-group search-bar flex-row">
      <div className='inputContainer'>
        <input type="text" className='form-control' value={text} placeholder='Search for a Commander...' name='text' onChange={onChange}/>
      </div>   
      <div className='flex-col search-btn'>
        <a href="#/" className='btn btn-outline-secondary' >
          <i className='search-icon fa fa-search' onClick={onSubmit}></i>
        </a>
      </div>  
    </div>
  )
}

export default connect(state => ({
  search: state.search
}))(Searchbar)
