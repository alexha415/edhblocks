import React from 'react'
import Card from '../../card/Card';
import {connect} from 'react-redux';
import './commanderList.css';

const CommanderList = ({search: {commanders}}) => {

  const searchResults = () => {
    return <div className='container card-list-container'>
      {commanders.map(card => {
        return <Card key={card.id} card={card} commander={card}/>
      })}
    </div>
    }
  const emptySearch = () => {
    if(commanders)
    return <p className='no-result-text'>No Results</p>
  }
  return (
    <Fragment>
      {commanders && commanders.length > 0 ?
        searchResults() : emptySearch()
      }
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  search: state.search
})
export default connect(mapStateToProps)(CommanderList)
