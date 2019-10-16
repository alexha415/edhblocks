import React, {useState, useEffect} from 'react'

const Searchbar = ({submit, send}) => {
  
  const [text, setText] = useState('');

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
    <div className="input-group">   
      <input type="text" className='form-control' value={text} placeholder='Search for a Commander...' name='text' onChange={onChange}/>
      <div className="input-group-append">
        <a href="#/" className='btn btn-outline-secondary' onClick={onSubmit}>
          <i className='fa fa-search' style={{height: '100%'}}></i>
        </a>
      </div>  
    </div>
  )
}

export default Searchbar
