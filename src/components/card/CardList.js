import React, {useEffect, useState} from 'react'
import Card from './Card';
import {connect} from 'react-redux';

const CardList = ({card: {cards}}) => {

  return (
  <div className='container'>
    {cards && cards.length > 0 && cards.map(card => {
      return <Card key={card.id} card={card}/>
    })}
  </div>
  )
}

const mapStateToProps = (state) => ({
  card: state.card
})
export default connect(mapStateToProps, {})(CardList)
