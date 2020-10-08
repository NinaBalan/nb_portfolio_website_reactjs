import React, { Component } from 'react';
import Widecard from '../components/widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="M.Tech Software Engineering" where=" University" from="July 2007" to="Present"/>
                <Widecard title="SSLC | HSC" where=" Higher  School" from="2001" to="2007"/>
            </div>
        )
    }
}
export default Education;