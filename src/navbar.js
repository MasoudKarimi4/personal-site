import React from 'react';


class NavBar extends React.Component {
    render () {
        return (
            <div>
            <ul class="topnav">
            <li><a class="active" href="#home">Header</a></li>
            <li><a href="#news">About Me</a></li>
            <li><a href="#contact">Projects</a></li>
            <li class="right"><a href="#about">Resume</a></li>
            <li class="contact"><a href="#about">Contact</a></li>
            </ul> 
            </div>
        )
    }
}
export {NavBar};  