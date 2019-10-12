import React,{useRef, useEffect, useState, Fragment} from 'react'

import {connect} from 'react-redux';
import {searchCommander} from '../../../actions/cardActions';

const SearchCommander = ({card: {commanders}, searchCommander}) => {
  const [text, setText] = useState('');
  const [identity, setIdentity] = useState({
      R: '',
      W: '',
      U: '',
      G: '',
      B: '',
      colorless: ''
  });
  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    setText('');
    searchCommander(text, colorIdentity);
  }

  const onClick = (e) => {
    e.preventDefault();
    onSubmit(e);
  }

  let colorIdentity = '';
  const createColorQuery = (e) => {
      e.preventDefault();
      Object.keys(identity).forEach( key => {
          colorIdentity+= identity[key];
      })
    
      console.log(colorIdentity);
      colorIdentity = '';
      //clear after data
  }
  const setColorId = (e) => {
      if(e.target.checked){
        identity[e.target.name] = e.target.name;
      }else{
        identity[e.target.name] = '';
      }
  }
  return (
    <Fragment>
        <div className="flex-container-row">
            <div className='checkbox-container'>
                <label htmlFor="W">White</label>
                <input type="checkbox" name='W' value={'W'} onClick={setColorId}/>
            </div>
            <div className='checkbox-container'>
                <label htmlFor="U">Blue</label>
                <input type="checkbox" name='U' value={'U'} onClick={setColorId}/>
            </div>
            <div className='checkbox-container'>
                <label htmlFor="B">Black</label>
                <input type="checkbox" name='B' value={'B'} onClick={setColorId}/>
            </div>
            <div className='checkbox-container'>
                <label htmlFor="G">Green</label>
                <input type="checkbox" name='G' value={'G'} onClick={setColorId}/>
            </div>
            <div className='checkbox-container'>
                <label htmlFor="R">Red</label>
                <input type="checkbox" name='R' value={'R'} onClick={setColorId}/>
            </div>
    </div>
        

      <form onSubmit={onSubmit} style ={{width: '70%'}}>
        <div className="input-group">   
          <input type="text" className='form-control' value={text} for='text' placeholder='Search for a Commander...' name='text' onChange={onChange}/>
          <div className="input-group-append">
            <a href="#" className='btn btn-outline-secondary' onClick={onClick}>
              <i className='fa fa-search' style={{height: '100%'}}></i>
            </a>
          </div>  
        </div>
      </form>
    </Fragment>
  )
}
const mapStateToProps = (state) => ({
    card: state.card
})
export default connect(mapStateToProps, {searchCommander})(SearchCommander)