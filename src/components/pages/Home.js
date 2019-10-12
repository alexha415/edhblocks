import React from 'react'
import SearchCommander from './../layout/Search/SearchCommander';
const Home = () => {
  return (
    <div className="home flex-container-col">
      <h4>Choose a Color Identity or Search for a Commander</h4>
      <SearchCommander/>
    </div>
  )
}

export default Home
