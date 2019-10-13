import React from 'react'
import SearchCommander from './../layout/Search/SearchCommander';
import CardList from './../card/CardList';
const Home = () => {
  return (
    <div className="home flex-container-col">
      <h4>Choose a Color Identity or Search for a Commander</h4>
      <SearchCommander/>
      <CardList/>
    </div>
  )
}

export default Home
