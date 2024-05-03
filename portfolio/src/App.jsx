import React from 'react'
import Home from './Component/Home'
import Main from './Component/Main'
import Skills from "./Component/Skills"
import Contact from './Component/Contact'
import Footer from './Component/Footer'
const App = () => {
  return (
    <div>
        <Home></Home>
        <div>
        <Main></Main>
        <Skills></Skills>
        <Contact/>
        </div>
        <Footer/>
      
    </div>
  )
}

export default App