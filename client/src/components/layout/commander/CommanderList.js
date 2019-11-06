import React from 'react'
import Card from '../../card/Card';
import {connect} from 'react-redux';
import './commanderList.css';

const CommanderList = ({search: {commanders}}) => {

  return (
  <div className='container card-list-container'>
    {commanders && commanders.map(card => {
      return <Card key={card.id} card={card} commander={card}/>
    })}
  </div>
  )
}

const mapStateToProps = (state) => ({
  search: state.search
})
export default connect(mapStateToProps)(CommanderList)
