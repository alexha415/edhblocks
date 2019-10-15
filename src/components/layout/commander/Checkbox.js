import React, {useState, useEffect, useRef} from 'react'
import {connect} from 'react-redux';

const Checkbox = ({name, color, setColor, search: {commanders}}) => {

  const checkboxEl = useRef(null)
  const [checked, setChecked] = useState(false);

  //resets checkbox to default when search form receives information

  useEffect( () => {
    checkboxEl.current.checked = false;
  }, [commanders])

  const changeChecked = () => {
    checkboxEl.current.checked = !checkboxEl.current.checked;
    if(checkboxEl.current.checked){
      setChecked(true);
    }
    setColor(color, checkboxEl.current.checked);
  }

  return (
    <div className={`flex-container-row checkbox checkbox-${color}`} onClick={changeChecked}>
      <label htmlFor={color}>{name}</label>
      <input ref={checkboxEl} type="checkbox" name={color} checked={false} onChange={() => {}}/>
      <span className='checkmark'></span>
    </div>
  )
}

const mapStateToProps = state => ({
  search: state.search
})
export default connect(mapStateToProps)(Checkbox)
