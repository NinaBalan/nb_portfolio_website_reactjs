import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/login.jpg';
import Social from '../components/social';

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={['I am a logo','For my project image logo']} speed={100} eraseDelay={700}/>
                <Social/>
            </div>
        )       
    }
}
export default Home;