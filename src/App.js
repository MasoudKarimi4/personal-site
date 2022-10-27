//import logo from './logo.svg';
import './App.css';
import { TypeAnimation } from 'react-type-animation'
import React from 'react';
import './icons.js'

class MovingText extends React.Component {
  render () {
    return (
      

    <section className ="BioBackground">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className ='Bio'>
        <h1>👋Hi, my name is Masoud!</h1>
        <p className="bioText">I am in my first year of the Honours BSc of Computer Science at the University of Ottawa. </p>



      </div>
    </section> )
  };
};

class SkillIcons extends React.Component {
  render () {
      return (
          <div>
      <img className='icon' src='https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png'/>
      <img className='icon' src='https://cdn-icons-png.flaticon.com/512/919/919828.png'/>
      <img className='icon' src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png' />
      <img className='icon' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' />
          </div>
      )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <div className="Intro-Text">

        <h1 className='Name'>
        Masoud Karimi 
        </h1>
        
        <TypeAnimation className ='Intro-Text' 
        sequence={['Computer Science Student at the University of Ottawa']}/>
        
        <SkillIcons />
        

        <MovingText />
        </div>
      </header>

    </div>
  )};



export default App;
