//import logo from './logo.svg';
import {NavBar} from './navbar.js'
import {Projects} from './projects.js'
import './App.css';
import './navstyle.css'
import { TypeAnimation } from 'react-type-animation'
import React from 'react';
import './icons.js'
import {Contact} from './contact.js'
import {SkillIcons} from './icons.js'

class MovingText extends React.Component {
  render () {
    return (
    <section className ="BioBackground" href='#about'>
      <a href="#ads"></a>
    </section> )
  };
};
// Skills

function App() {
  return (
    <div className="App" href="about">


      < NavBar /> 
      <header className="App-header">
        <div className="Intro-Text">

        <h1 className='Name'> Masoud Karimi </h1>
        
        <TypeAnimation className ='Intro-Text' 
        sequence={['Computer Science Student at the University of Ottawa']}/>
        <SkillIcons />
        </div>
        </header>
        <MovingText className="secondText" href='#about'/>
        <Contact />
    </div>
  )};



export default App;