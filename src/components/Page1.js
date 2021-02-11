import React, { Component } from 'react'
import Anime from 'react-anime'

import Particles from 'react-particles-js';

export default class Page1 extends Component {
    constructor(){
        super()
        this.state={
           
        }
    }
   
    render() {

       
        return (
            <div className="navicMainDiv">


            <Particles className="particles"
    params={{
	    "particles": {
	        "number": {
	            "value": 150
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
<div className="navicText">
    <h3>Frontend Developer</h3>


</div>

        


            </div>
        )
    }
}
