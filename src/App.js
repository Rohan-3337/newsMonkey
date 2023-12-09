import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { Routes, Route } from 'react-router-dom';


export class App extends Component {



  render() {
    return (
      <>
        <Navbar />
        
          <Routes>
            <Route exact path='/' element={<News key={"general"} pagesize={9} category={"general"} />} />
            <Route exact path='/business' element={<News key={"business"} pagesize={9} category={"business"} />} />
            <Route path='/entertainment' element={<News pagesize={9} category={"entertainment"} />} />
            <Route path='/general' element={<News key={"entertainment"} pagesize={9} category={"general"} />} />
            <Route path='/science' element={<News key={"science"} pagesize={9} category={"science"} />} />
            <Route path='/sports' element={<News key={"sports"} pagesize={9} category={"sports"} />} />
            <Route path='/technology' element={<News key={"technology"} pagesize={9} category={"technology"} />} />
            <Route path='/health' element={<News key={"health"} pagesize={9} category={"health"} />} />
          </Routes>
        
      </>
    )
  }
}

export default App
