import React,{useState, Fragment} from 'react'
import {connect} from 'react-redux';
import {searchCommander, clearSearch} from '../../../actions/searchActions';

const SearchCommander = ({searchCommander,clearSearch}) => {
  const [text, setText] = useState('');
  const [colorId, setColorId] = useState({
    W: false,
    U: false,
    B: false,
    R: false,
    G: false
  })

  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    let colors = '';
    Object.keys(colorId).forEach(key => {
      if(colorId[key]){
        colors += key;
      }
    })
    const query = {
      q: `=${text}`,
      is: `%3Acommander`
    }
    if(colors !== ''){
      query.identity = `%3A${colors}`
    }
    searchCommander(query)
    setText('');
    setColorId({
      W:false,
      U:false,
      B:false,
      R:false,
      G:false,
    })
  }

  const changeColorId = (e) => {
    setColorId({...colorId, [e.target.name] : e.target.checked});
  }
  return (
    <Fragment>
      <form onSubmit={onSubmit} style ={{width: '70%'}}>
      <div className="flex-container-row">
            <div className='checkbox'>
                <label htmlFor="W">White</label>
                <input type="checkbox" name='W' checked={colorId.W} onChange={changeColorId}/>
                <span className="checkmark"></span>
            </div>
            <div className='checkbox'>
                <label htmlFor="U">Blue</label> 
                <input type="checkbox" name='U' checked={colorId.U} onChange={changeColorId}/>
            </div>
            <div className='checkbox'>
                <label htmlFor="B">Black</label>
                <input type="checkbox" name='B' checked={colorId.B} onChange={changeColorId}/>
            </div>
            <div className='checkbox'>
                <label htmlFor="R">Red</label>
                <input type="checkbox" name='R' checked={colorId.R} onChange={changeColorId}/>
            </div>
            <div className='checkbox'>
                <label htmlFor="G">Green</label>
                <input type="checkbox" name='G' checked={colorId.G} onChange={changeColorId}/>
            </div>
        </div>
        <div className="input-group">   
          <input type="text" className='form-control' value={text} htmlFor='text' placeholder='Search for a Commander...' name='text' onChange={onChange}/>
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
export default connect(null, {searchCommander, clearSearch})(SearchCommander)