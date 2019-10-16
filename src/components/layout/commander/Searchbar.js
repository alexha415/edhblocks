import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';

const Searchbar = ({submit, send, search: {commanders}}) => {
  
  const [text, setText] = useState('');

  //this allows search bar to reset when the search results are updated
  const searchResults = JSON.stringify(commanders);
  useEffect( () => {
    setText('');
  },[searchResults])

  useEffect( () => {
    send(text);
  },[text]);

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    setText('');
    submit(e);
  }

  return (
    <div className="input-group search-bar">   
      <input type="text" className='form-control' value={text} placeholder='Search for a Commander...' name='text' onChange={onChange}/>
      <div className="input-group-append">
        <a href="#/" className='btn btn-outline-secondary' onClick={onSubmit}>
          <i className='fa fa-search' style={{height: '100%'}}></i>
        </a>
      </div>  
    </div>
  )
}

export default connect(state => ({
  search: state.search
}))(Searchbar)
