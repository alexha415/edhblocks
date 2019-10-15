import React,{useState, Fragment} from 'react'
import {connect} from 'react-redux';
import {searchCommander} from '../../../actions/searchActions';
import Checkbox from './Checkbox';
const SearchCommander = ({searchCommander}) => {
  const [text, setText] = useState('');
  const colors = {};
 
  const setColor = (color, checked) => {
    if(checked){
      colors[color] = '';
    }else{
      delete colors[color]
    }
  }

  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(colors);
    let colorString = '';
    Object.keys(colors).forEach(key => {
      colorString += key;
    })
    const query = {
      q: `=${text}`,
      is: `%3Acommander`
    }
    if(colors.hasOwnProperty('C')){
      console.log(colors);
      query.identity = `%3DC`
    }
    else if(colorString !== ''){
      query.identity = `%3D${colorString}`
    }
    searchCommander(query)
    setText('');
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
export default connect(null, {searchCommander})(SearchCommander)