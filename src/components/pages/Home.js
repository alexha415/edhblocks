import React from 'react'
import SearchCommander from '../layout/commander/SearchCommander';
import CommanderList from '../layout/commander/CommanderList';
const Home = () => {
  return (
    <div className="home flex-container-col">
      <h4>Choose a Color Identity or Search for a Commander</h4>
      <SearchCommander/>
      <CommanderList/>
    </div>
  )
}

export default Home
