import React, { Component } from 'react';
import Social from '../components/social';

class Contact extends Component {
    render() {
        return (
            <div className='condiv'>
                <h1 className='subtopic'>Conatct Me</h1>
                <h3>Email : nyna.balan@gmail.com</h3>
                <h3> Facebook : nina.balan.71 </h3>
                <Social />
            </div>
        )
    }
}

export default Contact;