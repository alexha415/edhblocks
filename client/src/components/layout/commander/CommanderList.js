import React, {useEffect} from 'react'
import Card from '../../card/Card';
import {connect} from 'react-redux';
import './commanderList.css';
import Spinner from '../spinner/Spinner';

const CommanderList = ({search: {commanders, loading}}) => {

  return (
  <div className='container card-list-container'>
    {loading ? <Spinner/> : commanders && commanders.map(card => {
      return <Card key={card.id} card={card} commander={card}/>
    })}
  </div>
  )
}

const mapStateToProps = (state) => ({
  search: state.search
})
export default connect(mapStateToProps)(CommanderList)
