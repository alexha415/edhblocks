import React,{useState, Fragment, useEffect} from 'react'

import {connect} from 'react-redux';
import {searchCards} from '../../../actions/searchActions';
import './searchbar.css';

const Searchbar = ({ searchCards, colorId }) => {

  const [text, setText] = useState('');
  const [restrictColorId, setRestrictColorId] = useState(false);
  
  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }

  useEffect( () => {
     if(colorId) searchCards({
        q: '=',
        commander: `:${colorId}`,
        legal: '%3Acommander'
     }, {order: '=edhrec'})
    //eslint-disable-next-line
  },[colorId]);
  const onSubmit = async (e) => {
    e.preventDefault();
    const query = {
      q: `=${text}`,
      legal: '%3Acommander'
    }
    if(colorId && restrictColorId){
      query.commander = `%3A${colorId}`;
    }
    if(restrictColorId || text !== ''){
      searchCards(query);
      setText('');
    }else{
      alert('Please refine your search');
    }
  }

  const onCheckboxClick = (e) => {
    e.preventDefault();
    setRestrictColorId(!restrictColorId);
  }
  return (
    <Fragment>
      <form onSubmit={onSubmit} style={{width: '100%'}}>
        <div className={`flex-container-row checkbox restrict-checkbox primary`}  onClick={onCheckboxClick}>
          <label htmlFor={'restrict-color'}>Restrict Search To Deck Colors</label>
          <input type="checkbox" name={'restrict-color'} checked={restrictColorId} onClick={null}/>
          <span className='checkmark'></span>
        </div>
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
