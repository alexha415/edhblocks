import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import './checkbox.css';
const Checkbox = ({name, color, setColor}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setColor(color, checked);
    //eslint-disable-next-line
  },[checked]);

  const changeChecked = () => {
    setChecked(!checked);
  }

  return (
    <div className={`flex-row checkbox checkbox-${color}`} onClick={changeChecked}>
      <label htmlFor={color}>{name}</label>
      <input type="checkbox" name={color} checked={checked} onChange={() => {}}/>
      <span className='checkmark'></span>
    </div>
  )
}

export default connect()(Checkbox)
