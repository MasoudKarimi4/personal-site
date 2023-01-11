import React from 'react';


class NavBar extends React.Component {
    render () {
        return (
            <div>
            <ul class="topnav">
            <li><a class="active" href="app.js">Home</a></li>
            <li><a class="active" href="projectPage.js">Projects</a></li>
            <li><a class="active" id="ads" href="#about">About me</a></li>
            <li><a class="active" href="#contact">Contact</a></li>
            </ul> 
            </div>
        )
    }
}
export {NavBar};  