import React,{useState, Fragment, useRef} from 'react'
import {connect} from 'react-redux';
import {searchCommander} from '../../../actions/searchActions';
import Checkbox from './checkbox/Checkbox';
import Searchbar from './Searchbar';
import './searchCommader.scss';

const SearchCommander = ({searchCommander}) => {
  const [text, setText] = useState('');
  const [colors] = useState({});

  const whiteCheckbox = useRef(null);
  const blueCheckbox = useRef(null);
  const blackCheckbox = useRef(null);
  const redCheckbox = useRef(null);
  const greenCheckbox = useRef(null);
  const colorlessCheckbox = useRef(null);

  const setColor = (color, checked) => {
    if(checked){
      colors[color] = '';
    }else{
      delete colors[color]
    }
  }
  
  const sendTextToParent = (text) => {
    setText(text);
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    let colorString = '';
    Object.keys(colors).forEach(key => {
      colorString += key;
    })
    const query = {
      q: `=${text}`,
      is: `%3Acommander`
    }
    if(colors.hasOwnProperty('C')){
      query.identity = `%3DC`
    }
    else if(colorString !== ''){
      query.identity = `%3D${colorString}`
    }
    searchCommander(query)
  }
  return (
    <Fragment>
      <form className='searchForm' onSubmit={onSubmit}>
      <h4>Pick Your Commander</h4>
        <div className="flex-row checkbox-container">
          <Checkbox ref={whiteCheckbox} name='White' color='W' setColor={setColor} uncheck={false}/>
          <Checkbox ref={blueCheckbox} name='Blue' color='U' setColor={setColor} uncheck={false}/>
          <Checkbox ref={blackCheckbox} name='Black' color='B' setColor={setColor} uncheck={false}/>
          <Checkbox ref={redCheckbox} name='Red' color='R' setColor={setColor} uncheck={false}/>
          <Checkbox ref={greenCheckbox} name='Green' color='G' setColor={setColor} uncheck={false}/>
          <Checkbox ref={colorlessCheckbox} name='Colorless' color='C' setColor={setColor} uncheck={false}/>
        </div>
        <Searchbar send={sendTextToParent} submit={onSubmit}/>
      </form>
    </Fragment>
  )
}
export default connect(null, {searchCommander})(SearchCommander)