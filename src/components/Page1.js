import React, { Component } from 'react'
import Anime from 'react-anime'
import Media from "react-media"

import Particles from 'react-particles-js';
import NavBaric from './NavBaric';

export default class Page1 extends Component {
    constructor(){
        super()
        this.state={
			broj:0
           
        }
    }
   
    render() {

       
        return (
           




<Media query={{ maxWidth: 768 }}>
                    {matches =>
                      matches ? (

						<div className="navicMainDiv">

								
						<Particles className="particles"
							params={{
								"particles": {
									"number": {
										"value": 60
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
						
						
						
						
						
						
													</div>



                 
                        ) : (
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

	<NavBaric />






							</div>



                       
                       )
                     }
                   </Media>



        


            
        )
    }
}
