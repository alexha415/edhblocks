import React from 'react'
import SearchCommander from '../../layout/commander/SearchCommander';
import CommanderList from '../../layout/commander/CommanderList';
import './home.css';
const Home = () => {
  return (
    <div className="home flex-container-col">
      <h4>Search For A Commander</h4>
      <SearchCommander/>
      <CommanderList/>
    </div>
  )
}

export default Home
