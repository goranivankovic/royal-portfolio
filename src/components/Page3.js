import React, { Component } from 'react'
import Anime from 'react-anime'
import Media from "react-media"

import Particles from 'react-particles-js';
import NavBaric from './NavBaric';
import { FaBars,FaLinkedin,FaYoutube,FaGithub,FaFacebook } from 'react-icons/fa'
import { Container, Row,Col,Button, ProgressBar } from 'react-bootstrap';
import {Link } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';


export default class Page2 extends Component {
    constructor(){
        super()
        this.state={
			broj:0,
			laz:false,
			html0:0,
			css0:0,
			rd0:0,
			js0:0,
			react0:0,
			node0:0,

           
        }
		this.mouseOnLi=this.mouseOnLi.bind(this)
        this.mousOutLi=this.mousOutLi.bind(this)
		this.spustiNavBar=this.spustiNavBar.bind(this)
    }

	componentDidMount(){
		this.setState({
			laz:true
		})
		setTimeout(() => {
			this.setState({
				html0:92
			})
			
		}, 1200);
		setTimeout(() => {
			this.setState({
				css0:81
			})
			
		}, 1600);

		setTimeout(() => {
			this.setState({
				rd0:84
			})
			
		}, 2000);
		setTimeout(() => {
			this.setState({
				js0:88
			})
			
		}, 2400);
		setTimeout(() => {
			this.setState({
				react0:83
			})
			
		}, 2800);
		setTimeout(() => {
			this.setState({
				node0:75
			})
			
		}, 3200);




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
		const imeColor={
			color:'#ffa500'

		}





        return (
            

<Media query={{ maxWidth: 768 }}>
                    {matches =>
                      matches ? (

						<div className="navicMainDiv768" id="page3navic768">

								
						<Particles className="particles"
							params={{
								"particles": {
									"number": {
										"value": 25
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
                   <Link to="/"> <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="sviNavLinkovi">HOME</li></Link>
				   <Link to="/about"> <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="sviNavLinkovi">ABOUT</li></Link>
                        <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="sviNavLinkovi">SKILLS</li>
                        <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="sviNavLinkovi">PORTFOLIO</li>
                        <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="sviNavLinkovi">CONTACT</li>



                    </ul>

                </div>


            </div>

			<div className="bars">
				<FaBars  className="h3 text-light" onClick={this.spustiNavBar}/>
			</div>

			<div className="skillText">
 
<Container>
	<Row>

		<Col className="h6 text-center" xs={12} 
	data-aos="fade-right"
    data-aos-delay="3000"
    data-aos-duration="1300"
    data-aos-easing="ease-out-cubic"
    data-aos-once="false"
	 style={imeColor}>SKILLS</Col>
	</Row>
</Container>
<br></br>


<Container>
	<Row className="footerConRow">
		<Col sm={10} xs={12}>
			<p className="text-light">HTML</p>
			<ProgressBar title={'Html'}  now={this.state.html0} animated label={this.state.html0 +' %'}/>
		</Col>
		<Col sm={10} xs={12}>
			<p className="text-light">CSS</p>
			<ProgressBar title={'Css'} now={this.state.css0} animated label={this.state.css0 +' %'}/>
		</Col>
	
	</Row>
</Container>
<br></br>


<Container>
	<Row className="footerConRow">
		<Col sm={10} xs={12}>
			<p className="text-light">RESPONSIVE DESIGN</p>
			<ProgressBar title={'Responsive'} now={this.state.rd0} animated label={this.state.rd0 +' %'}/>
		</Col>
		<Col sm={10} xs={12}>
			<p className="text-light">JAVASCRIPT</p>
			<ProgressBar title={'Js'}  now={this.state.js0} animated label={this.state.js0 +' %'}/>
		</Col>
	
	</Row>
</Container>
<br></br>


<Container>
	<Row className="footerConRow">
		<Col sm={10} xs={12}>
			<p className="text-light">REACT</p>
			<ProgressBar title={'React'}  now={this.state.react0} animated label={this.state.react0 +' %'}/>
		</Col>
		<Col sm={10} xs={12}>
			<p className="text-light">NODE.JS/MONGO.DB</p>
			<ProgressBar  title={'Node.js'} now={this.state.node0} animated label={this.state.node0 +' %'}/>
		</Col>
	
	</Row>
</Container>
<br></br>
<Container>
	<Row>
	<Col xs={12}><h6 className="text-center" style={imeColor}
	data-aos="fade-up"
	data-aos-delay="1500"
	data-aos-duration="1300"
	data-aos-easing="ease-out-cubic"
	data-aos-once="false"
	>TECHNICAL SKILLS</h6> </Col>
	</Row>
</Container>
<br></br>
<Container>
	<Row>
	

		<Col sm={6} xs={12}>
   <p className="text-light pt">
   HTML 5 / CSS 3 / SCSS / BOOTSTRAP<br></br>
   JAVASCRIPT / ES6, ES7, ES8<br></br>

   JQUERY / REACT / REACT ANIME
   </p>
	
	


		</Col>
		<Col sm={6} xs={12}>
   <p className="text-light pt">
  NODEJS / EXPRESS<br></br>
    Mongo.DB / GITHUB <br></br>

  
   </p>
	
	


		</Col>

	</Row>
</Container>



<Container>
	<Row>
		<Col className="text-center" xs={12}>
		<Button className="btn-sm bg-transparent"
		data-aos="fade-left"
		data-aos-delay="3000"
		data-aos-duration="1300"
		data-aos-easing="ease-out-cubic"
		data-aos-once="true"
		onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}>Next</Button>
		</Col>
	</Row>
</Container>


</div>

		

<div className="footer">
	<Container className="footerCon">
		<Row className="footerConRow">
			<Col md={5} sm={8}  xs={12} className="text-center text-light footerColona">
		 
	   <a href="https://www.linkedin.com/in/goran-ivankovi%C4%87-86b19b1b9/" >	<FaLinkedin  className="h5 ri"/></a>
	
	
		<a href="https://www.youtube.com/"><FaYoutube  className="h5 ri" /></a>
	
		
		<a href="https://github.com/goranivankovic"><FaGithub  className="h5 ri"/></a>	

		
		<a href="https://sr-rs.facebook.com/goran.ivankovic.12"><FaFacebook  className="h5 ri"/></a>
	
			</Col>
		
		</Row>
	</Container>

</div>



						
						
													</div>
												



                 
                        ) : (
							<div className="navicMainDiv">

								
<Particles className="particles"
    params={{
	    "particles": {
	        "number": {
	            "value": 70
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
<Link to="/">  <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="sviNavLinkovi">HOME</li></Link>
	 </Anime>  

	 <Anime translateY={[-400,0]} skewY={[-80,0]} duration={2000} delay={1800}>
	 <Link to="/about"> <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi} className="sviNavLinkovi">ABOUT</li></Link>
   </Anime>  

 
   <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="glow sviNavLinkovi">SKILLS</li> 
  

   <Anime translateY={[-400,0]} skewY={[80,0]} duration={2000} delay={1800}>
   <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="sviNavLinkovi">PORTFOLIO</li>
   </Anime>
   <Anime translateY={[-400,0]} skewY={[30,0]} duration={2000} delay={1300}>
   <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="sviNavLinkovi">CONTACT</li>
   </Anime>

	</ul>
</div>



</div>
<div className="skillText">
 
<Container>
	<Row>

		<Col className="h3 text-center" xs={12} 
	data-aos="fade-right"
    data-aos-delay="3000"
    data-aos-duration="1300"
    data-aos-easing="ease-out-cubic"
    data-aos-once="false"
	 style={imeColor}>SKILLS</Col>
	</Row>
</Container>
<br></br>


<Container>
	<Row>
		<Col sm={6} xs={12}>
			<h6 className="text-light">HTML</h6>
			<ProgressBar title={'Html'}  now={this.state.html0} animated label={this.state.html0 +' %'}/>
		</Col>
		<Col sm={6} xs={12}>
			<h6 className="text-light">CSS</h6>
			<ProgressBar title={'Css'} now={this.state.css0} animated label={this.state.css0 +' %'}/>
		</Col>
	
	</Row>
</Container>
<br></br>


<Container>
	<Row>
		<Col sm={6} xs={12}>
			<h6 className="text-light">RESPONSIVE DESIGN</h6>
			<ProgressBar title={'Responsive'} now={this.state.rd0} animated label={this.state.rd0 +' %'}/>
		</Col>
		<Col sm={6} xs={12}>
			<h6 className="text-light">JAVASCRIPT</h6>
			<ProgressBar title={'Js'}  now={this.state.js0} animated label={this.state.js0 +' %'}/>
		</Col>
	
	</Row>
</Container>
<br></br>


<Container>
	<Row>
		<Col sm={6} xs={12}>
			<h6 className="text-light">REACT</h6>
			<ProgressBar title={'React'}  now={this.state.react0} animated label={this.state.react0 +' %'}/>
		</Col>
		<Col sm={6} xs={12}>
			<h6 className="text-light">NODE.JS/EXPRESS/MONGO.DB</h6>
			<ProgressBar  title={'Node.js'} now={this.state.node0} animated label={this.state.node0 +' %'}/>
		</Col>
	
	</Row>
</Container>
<br></br>
<Container>
	<Row>
	<Col xs={12}><h6 className="text-center" style={imeColor}
	data-aos="fade-up"
	data-aos-delay="1500"
	data-aos-duration="1300"
	data-aos-easing="ease-out-cubic"
	data-aos-once="false"
	>TECHNICAL SKILLS</h6> </Col>
	</Row>
</Container>
<br></br>
<Container>
	<Row>
	

		<Col sm={6} xs={12}>
   <p className="text-light">
   HTML 5 / CSS 3 / SCSS / BOOTSTRAP<br></br>
   JAVASCRIPT / ES6, ES7, ES8<br></br>

   JQUERY / REACT / REACT ANIME
   </p>
	
	


		</Col>
		<Col sm={6} xs={12}>
   <p className="text-light">
  NODEJS / EXPRESS<br></br>
    Mongo.DB / GITHUB <br></br>

  
   </p>
	
	


		</Col>

	</Row>
</Container>
<br></br>


<Container>
	<Row>
		<Col className="text-center" xs={12}>
		<Button className="btn-lg bg-transparent"
		data-aos="fade-left"
		data-aos-delay="3000"
		data-aos-duration="1300"
		data-aos-easing="ease-out-cubic"
		data-aos-once="false"
		onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}>Next</Button>
		</Col>
	</Row>
</Container>


</div>
<div className="footer">
	<Container className="footerCon">
		<Row className="footerConRow">
			<Col xs={5} className="text-center text-light footerColona">
		 
	   <a href="https://www.linkedin.com/in/goran-ivankovi%C4%87-86b19b1b9/" >	<FaLinkedin  className="h3 ri"/></a>
	
	
		<a href="https://www.youtube.com/"><FaYoutube  className="h3 ri" /></a>
	
		
		<a href="https://github.com/goranivankovic"><FaGithub  className="h3 ri"/></a>	

		
		<a href="https://sr-rs.facebook.com/goran.ivankovic.12"><FaFacebook  className="h3 ri"/></a>
	
			</Col>
		
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