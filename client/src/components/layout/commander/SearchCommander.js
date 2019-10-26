import React,{useState, Fragment} from 'react'
import {connect} from 'react-redux';
import {searchCommander} from '../../../actions/searchActions';
import Checkbox from './checkbox/Checkbox';
import Searchbar from './Searchbar';
import './searchCommader.css';

const SearchCommander = ({searchCommander}) => {
  const [text, setText] = useState('');
  const [colors] = useState({});

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
      <form onSubmit={onSubmit} style ={{width: '70%', marginBottom: '2rem'}}>
        <div className="flex-container-row checkbox-container">
          <Checkbox name='White' color='W' setColor={setColor}/>
          <Checkbox name='Blue' color='U' setColor={setColor}/>
          <Checkbox name='Black' color='B' setColor={setColor}/>
          <Checkbox name='Red' color='R' setColor={setColor}/>
          <Checkbox name='Green' color='G' setColor={setColor}/>
          <Checkbox name='Colorless' color='C' setColor={setColor}/>
        </div>
        <Searchbar send={sendTextToParent} submit={onSubmit}/>
      </form>
    </Fragment>
  )
}
export default connect(null, {searchCommander})(SearchCommander)