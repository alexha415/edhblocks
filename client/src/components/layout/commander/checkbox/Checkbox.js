import React, {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux';
import './checkbox.css';
const Checkbox = ({name, color, setColor}) => {

  const checkboxEl = useRef(null)
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setColor(color, checked);
  },[checked]);

  const changeChecked = () => {
    setChecked(!checked);
  }

  return (
    <div className={`flex-container-row checkbox checkbox-${color}`} onClick={changeChecked}>
      <label htmlFor={color}>{name}</label>
      <input ref={checkboxEl} type="checkbox" name={color} checked={checked}/>
      <span className='checkmark'></span>
    </div>
  )
}

export default connect()(Checkbox)
