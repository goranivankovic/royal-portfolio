import React, { Component } from 'react'
import Anime from 'react-anime'
import Media from "react-media"

import Particles from 'react-particles-js';
import NavBaric from './NavBaric';
import { FaBars,FaLinkedin,FaYoutube,FaGithub,FaFacebook } from 'react-icons/fa'
import { Container, Row,Col,Button } from 'react-bootstrap';
import {Link } from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';
import movies from '../img/movies.jpeg'
import weather from '../img/weather.jpeg'
import covid from '../img/covid.jpeg'
import restorant from '../img/restorant.jpeg'
import body from '../img/body.jpeg'
import coding from '../img/coding.jpg'
import quiz from '../img/quiz.jpeg'
import rps from '../img/rps.jpg'
import puzzle from '../img/puzzle.jpeg'

export default class Page4 extends Component {
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
        b.target.style.opacity='1'
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

						<div className="navicMainDiv768" id="navicMainDivpage4">

								
						<Particles className="particles" id="particalesPage4"
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
				   <Link to="/skills">     <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="sviNavLinkovi">SKILLS</li></Link>
				   <Link to="/portfolio">   <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="sviNavLinkovi">PORTFOLIO</li></Link>
                   <Link to="/contact"><li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="sviNavLinkovi">CONTACT</li></Link>



                    </ul>

                </div>


            </div>

			<div className="bars">
				<FaBars  className="h3 text-light" onClick={this.spustiNavBar}/>
			</div>

            <div className="portfolioText" >
 
<Container>
	<Row>

		<Col className="h6 text-center" xs={12} 
	data-aos="fade-right"
    data-aos-delay="2000"
    data-aos-duration="1300"
    data-aos-easing="ease-out-cubic"
    data-aos-once="true"
	 style={imeColor}>PORTFOLIO</Col>
	</Row>
</Container>
<br/>
<br/>


<Container>
	<Row>

		<Col className="h6 text-light" xs={12}> 

       <p>Web Apps</p>

    </Col>
    <Col sm={4} xs={12} className="pad10" onMouseOver={this.mouseOnLi} onMouseOut={this.mousOutLi}>
     <a href="https://react-movie-app-goga.netlify.app/"><img src={movies} className="slike" alt=""/></a>  
    </Col>
    <Col sm={4} xs={12} className="pad10" onMouseOver={this.mouseOnLi} onMouseOut={this.mousOutLi}>
      <a href="https://royal-weather.netlify.app/"><img src={weather} className="slike" alt=""/></a>  
    </Col>
    <Col sm={4} xs={12} className="pad10" onMouseOver={this.mouseOnLi} onMouseOut={this.mousOutLi}>
      <a href="https://covid19-app-react.netlify.app/"><img src={covid} className="slike" alt=""/></a>  
    </Col>
	</Row>
</Container> 
<br/>

<Container>
	<Row>

		<Col className="h6 text-light" xs={12}> 

       <p>Web Sites</p>

    </Col>
    <Col sm={4} xs={12} className="pad10"  onMouseOver={this.mouseOnLi} onMouseOut={this.mousOutLi}>
      <a href="https://royal-food.netlify.app/"><img src={restorant} className="slike" alt=""/></a>  
    </Col>
    <Col sm={4} xs={12} className="pad10"  onMouseOver={this.mouseOnLi} onMouseOut={this.mousOutLi}>
       <a href="https://royal-fit.netlify.app/"><img src={body} className="slike" alt=""/></a> 
    </Col>
    <Col sm={4} xs={12} className="pad10"  onMouseOver={this.mouseOnLi} onMouseOut={this.mousOutLi}>
      <a href="https://gmi-computing.netlify.app/"><img src={coding} className="slike" alt=""/></a>  
    </Col>
	</Row>
</Container> 
<br/>
<br/>

<Container>
	<Row>

		<Col className="h6 text-light" xs={12}> 

       <p>Web Games</p>

    </Col>
    <Col sm={4} xs={12} className="pad10" onMouseOver={this.mouseOnLi} onMouseOut={this.mousOutLi}>
       <a href="https://royal-quiz.netlify.app/"><img src={quiz} className="slike" alt=""/></a> 
    </Col>
    <Col sm={4} xs={12}  className="pad10" onMouseOver={this.mouseOnLi} onMouseOut={this.mousOutLi}>
      <a href="https://royal-rps.netlify.app/"><img src={rps} className="slike" alt=""/></a>  
    </Col>
    <Col sm={4} xs={12} className="pad10"  onMouseOver={this.mouseOnLi} onMouseOut={this.mousOutLi}>
       <a href="https://goranivankovic.github.io/puzzle/"><img src={puzzle} className="slike" alt=""/></a> 
    </Col>
	</Row>
</Container> 
<br/>
<br/>

<Container>
	<Row>
		<Col className="text-center" xs={12}>
	<Link to="/contact"><Button className="btn-sm bg-transparent btnZ"
		data-aos="fade-left"
		data-aos-delay="2000"
		data-aos-duration="1300"
		data-aos-easing="ease-out-cubic"
		data-aos-once="false"
		onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}>Next</Button></Link>
		</Col>
	</Row>
</Container>


</div>

<div className="footer">
	<Container>
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
							<div className="navicMainDiv" id="navicMainDivpage4">

								
<Particles className="particles" id="particalesPage4"
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

 
<Link to="/skills"><li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="sviNavLinkovi">SKILLS</li> </Link> 
  

   <Anime translateY={[-400,0]} skewY={[80,0]} duration={2000} delay={1800}>
   <Link to="/portfolio">  <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="glow sviNavLinkovi">PORTFOLIO</li></Link>
   </Anime>
   <Anime translateY={[-400,0]} skewY={[30,0]} duration={2000} delay={1300}>
   <Link to="/contact">  <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="sviNavLinkovi">CONTACT</li></Link>
   </Anime>

	</ul>
</div>



</div>
<div className="portfolioText">
 
<Container>
	<Row>

		<Col className="h2 text-center" xs={12} 
	data-aos="fade-right"
    data-aos-delay="3000"
    data-aos-duration="1300"
    data-aos-easing="ease-out-cubic"
    data-aos-once="false"
	 style={imeColor}>PORTFOLIO</Col>
	</Row>
</Container>
<br/>
<br/>


<Container>
	<Row className="footerConRow">

		<Col className="h6 text-light" xs={12}> 

       <h5>Web Apps</h5>

    </Col>
     <Col sm={4} xs={12} onMouseOver={this.mouseOnLi} onMouseOut={this.mousOutLi}>
	 <a href="https://react-movie-app-goga.netlify.app/" > <img src={movies} className="slike" alt=""/></a>
    </Col>

    <Col sm={4} xs={12} onMouseOver={this.mouseOnLi} onMouseOut={this.mousOutLi}>
	<a href="https://royal-weather.netlify.app/" >    <img src={weather} className="slike" alt=""/></a>
    </Col>
    <Col sm={4} xs={12} onMouseOver={this.mouseOnLi} onMouseOut={this.mousOutLi}>
	<a href="https://covid19-app-react.netlify.app/" ><img src={covid} className="slike" alt=""/></a>
    </Col>
	</Row>
</Container> 
<br/>

<Container>
	<Row className="footerConRow">

		<Col className="h6 text-light" xs={12}> 

       <h5>Web Sites</h5>

    </Col>
    <Col sm={4} xs={12}  onMouseOver={this.mouseOnLi} onMouseOut={this.mousOutLi}>
	<a href="https://royal-food.netlify.app/" >   <img src={restorant} className="slike" alt=""/></a>
    </Col>
    <Col sm={4} xs={12}  onMouseOver={this.mouseOnLi} onMouseOut={this.mousOutLi}>
	<a href="https://royal-fit.netlify.app/" ><img src={body} className="slike" alt=""/></a>
    </Col>
    <Col sm={4} xs={12}  onMouseOver={this.mouseOnLi} onMouseOut={this.mousOutLi}>
	<a href="https://gmi-computing.netlify.app/" ><img src={coding} className="slike" alt=""/></a>
    </Col>
	</Row>
</Container> 
<br/>
<br/>

<Container>
	<Row className="footerConRow">

		<Col className="h6 text-light" xs={12}> 

       <h5>Web Games</h5>

    </Col>
    <Col sm={4} xs={12}  onMouseOver={this.mouseOnLi} onMouseOut={this.mousOutLi}>
	<a href="https://royal-quiz.netlify.app/" >  <img src={quiz} className="slike" alt=""/></a>
    </Col>
    <Col sm={4} xs={12}  onMouseOver={this.mouseOnLi} onMouseOut={this.mousOutLi}>
	<a href="https://royal-rps.netlify.app/" >  <img src={rps} className="slike" alt=""/></a>
    </Col>
    <Col sm={4} xs={12}  onMouseOver={this.mouseOnLi} onMouseOut={this.mousOutLi}>
	<a href="https://goranivankovic.github.io/puzzle/" > <img src={puzzle} className="slike" alt=""/></a>
    </Col>
	</Row>
</Container> 
<br/>
<br/>

<Container>
	<Row>
		<Col className="text-center" xs={12}>
	<Link to="/contact"><Button className="btn-lg bg-transparent"
		data-aos="fade-left"
		data-aos-delay="2000"
		data-aos-duration="1300"
		data-aos-easing="ease-out-cubic"
		data-aos-once="false"
		onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}>Next</Button></Link>
		</Col>
	</Row>
</Container>


</div>
<div className="footer">
	<Container>
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
