import React, { Component } from 'react'
import Anime from 'react-anime'
import Media from "react-media"

import Particles from 'react-particles-js';
import NavBaric from './NavBaric';
import { FaBars } from 'react-icons/fa'
import { Container, Row,Col } from 'react-bootstrap';

import AOS from 'aos';
import 'aos/dist/aos.css';



export default class Page1 extends Component {
    constructor(){
        super()
        this.state={
			broj:0,
			laz:false
           
        }
		this.mouseOnLi=this.mouseOnLi.bind(this)
        this.mousOutLi=this.mousOutLi.bind(this)
		this.spustiNavBar=this.spustiNavBar.bind(this)
    }

	componentDidMount(){
		this.setState({
			laz:true
		})
	}



	mouseOnLi(a){
        a.target.style.opacity='1'
        a.target.style.color='#ffa500'
        a.target.style.transform='scale(0.92)'
        a.target.style.transition='1000ms'
    }

    mousOutLi(b){
        b.target.style.opacity='0.8'
        b.target.style.color='azure'
        b.target.style.transform='scale(1)'
        b.target.style.transition='1000ms'


    }

	spustiNavBar(e){
		const navBaricMain768 =document.querySelector('.navBaricMain768')

		if(this.state.laz && e.button=='0'){
		  
			navBaricMain768.style.display='flex'

			this.setState({
				laz:false
			})



		}else if(!this.state.laz && e.button=='0'){
			navBaricMain768.style.display='none'

			this.setState({
				laz:true
			})

		}
		

	}




   
    render() {
		AOS.init();


       
        return (
           




<Media query={{ maxWidth: 768 }}>
                    {matches =>
                      matches ? (

						<div className="navicMainDiv768">

								
						<Particles className="particles"
							params={{
								"particles": {
									"number": {
										"value": 30
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

<div className="navBaricMain768">
                <div className="navicPosition768">
                    <ul>
                        <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi} className="glow">HOME</li>
                        <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}>ABOUT</li>
                        <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}>SKILLS</li>
                        <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}>PORTFOLIO</li>
                        <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}>CONTACT</li>



                    </ul>

                </div>


            </div>

			<div className="bars">
				<FaBars  className="h3 text-light" onClick={this.spustiNavBar}/>
			</div>
						
						
						
						
						
						
													</div>



                 
                        ) : (
							<div className="navicMainDiv">

								
<Particles className="particles"
    params={{
	    "particles": {
	        "number": {
	            "value": 90
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


	
<div className="navBaricMain"
data-aos="fade-down"
data-aos-delay="500"
data-aos-duration="800"
data-aos-easing="ease-in-out"
data-aos-once="false"
>

<div className="navicPosition">
	<ul>
<Anime translateY={[-400,0]} skewY={[-30,0]} duration={2000} delay={1300}>
   <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi} className="glow">HOME</li> 
	 </Anime>  

	 <Anime translateY={[-400,0]} skewY={[-80,0]} duration={2000} delay={1800}>
   <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}>ABOUT</li>
   </Anime>  

 
   <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}>SKILLS</li> 
  

   <Anime translateY={[-400,0]} skewY={[80,0]} duration={2000} delay={1800}>
   <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}>PORTFOLIO</li>
   </Anime>
   <Anime translateY={[-400,0]} skewY={[30,0]} duration={2000} delay={1300}>
   <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}>CONTACT</li>
   </Anime>

	</ul>
</div>



</div>
<div className="prviText">

<Container>
	<Row>

		<Col className="h2 text-light text-center" xs={12} 
	data-aos="fade-down"
    data-aos-delay="3000"
    data-aos-duration="1300"
    data-aos-easing="ease-out-cubic"
    data-aos-once="false"
	>GORAN IVANKOVIĆ</Col>
	</Row>
</Container>
<br/>
<br/>


<Container>
	<Row>

		<Col className="h2 text-light text-center glow" xs={12} onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi} 
	data-aos="fade-up"
    data-aos-delay="1500"
    data-aos-duration="1300"
    data-aos-easing="ease-in-out"
    data-aos-once="false"
	>Frontend   Developer  and  Designer</Col>
	</Row>
</Container>

</div>






							</div>



                       
                       )
                     }
                   </Media>



        


            
        )
    }
}
