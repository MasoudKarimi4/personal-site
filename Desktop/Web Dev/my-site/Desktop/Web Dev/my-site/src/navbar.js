import React from 'react';


class NavBar extends React.Component {
    render () {
        return (
            <div>
            <ul class="topnav">
            <li><a class="active" href="#home">Header</a></li>
            <li><a class="active" href="#about">About me</a></li>
            <li><a class="active" href="#projects">Projects</a></li>
            <li><a class="active" href="#contact">Contact</a></li>
            </ul> 
            </div>
        )
    }
}
export {NavBar};  