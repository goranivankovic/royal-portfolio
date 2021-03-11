import React, { Component } from 'react'
import Anime from 'react-anime'
import Media from "react-media"

import Particles from 'react-particles-js';
import NavBaric from './NavBaric';
import { FaBars,FaLinkedin,FaYoutube,FaGithub,FaFacebook } from 'react-icons/fa'
import { Container, Row,Col,Button,Form, FormGroup, FormControl, FormLabel} from 'react-bootstrap';
import {Link } from 'react-router-dom'
import emailjs from 'emailjs-com';

import AOS from 'aos';
import 'aos/dist/aos.css';



export default class Page5 extends Component {
    constructor(props){
        super(props)
        this.state={
			broj:0,
			laz:false,
			email:'',
			message:''
           
        }
		this.mouseOnLi=this.mouseOnLi.bind(this)
        this.mousOutLi=this.mousOutLi.bind(this)
		this.spustiNavBar=this.spustiNavBar.bind(this)
		this.sendEmailAndMessage=this.sendEmailAndMessage.bind(this)
    }

	componentDidMount(){
		this.setState({
			laz:true
		})
	}

	

	sendEmailAndMessage(p){
		p.preventDefault();

		
	
		emailjs.sendForm('gmail', 'template_fm2n13w',p.target,'user_CUPedB8OkkfuUfSRyzgAo')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
		p.target.reset()

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

						<div className="navicMainDiv768">

								
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
					<Link to='/'> <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="sviNavLinkovi">HOME</li></Link>
					<Link to='/about'><li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="sviNavLinkovi">ABOUT</li></Link>
					<Link to="/skills"><li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="sviNavLinkovi">SKILLS</li></Link>
					<Link to="/portfolio">   <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="sviNavLinkovi">PORTFOLIO</li></Link>
					<Link to="/contact">   <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}  className="sviNavLinkovi">CONTACT</li></Link>



                    </ul>

                </div>


            </div>

			<div className="bars">
				<FaBars  className="h3 text-light" onClick={this.spustiNavBar}/>
			</div>

            
<div className="contactText">


<br/>


<Container>
	<Row>
    <Col className="h6 text-center" xs={12} 
	data-aos="fade-right"
    data-aos-delay="3000"
    data-aos-duration="1300"
    data-aos-easing="ease-out-cubic"
    data-aos-once="false"
	 style={imeColor} >CONTACT</Col>

		<Col className=" text-light text-center" xs={12} 
	data-aos="fade-up"
    data-aos-delay="1500"
    data-aos-duration="1300"
    data-aos-easing="ease-in-out"
    data-aos-once="false"
	>
          <Form onSubmit={this.sendEmailAndMessage}>
		  <FormGroup>
		  <Form.Text className="text-light text-left pt">
  goranivankovic87@gmail.com
    </Form.Text>
	<br></br>
	<Form.Text className="text-light text-left pt">
  +381/064/415-68-13
    </Form.Text>

	</FormGroup>
		

              <FormGroup>
                  <FormLabel className="float-left pt">Email</FormLabel>
                  <FormControl type="email" name="email" placeholder="Enter a Email..." required={true}  />

              </FormGroup>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <FormLabel className="float-left pt">Message</FormLabel>
                        
                        <Form.Control as="textarea" placeholder="Send Message..." rows="6" name="message"/>
                    </Form.Group>
                    <Button className="float-left btn-sm" type="submit"> Send</Button>
                </Form>

    </Col>
	</Row>
</Container>

<br/>

<Container>
	<Row>
		<Col className="text-center" xs={12}>
	<Link to='/'><Button className="btn-sm bg-transparent"
		data-aos="fade-left"
		data-aos-delay="2000"
		data-aos-duration="1300"
		data-aos-easing="ease-out-cubic"
		data-aos-once="true"
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
 <Link to='/'><li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi} className="sviNavLinkovi">HOME</li> </Link>
	 </Anime>  

	 <Anime translateY={[-400,0]} skewY={[-80,0]} duration={2000} delay={1800}>
	 <Link to='/about'><li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi} className="sviNavLinkovi">ABOUT</li></Link>
   </Anime>  

 
   <Link to="/skills"><li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi} className="sviNavLinkovi">SKILLS</li> </Link>
  

   <Anime translateY={[-400,0]} skewY={[80,0]} duration={2000} delay={1800}>
   <Link to="/portfolio"><li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi} className="sviNavLinkovi">PORTFOLIO</li></Link>
   </Anime>
    <Anime translateY={[-400,0]} skewY={[30,0]} duration={2000} delay={1300}>
  <Link to="/contact">  <li onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi} className="glow sviNavLinkovi">CONTACT</li></Link>
   </Anime>

	</ul>
</div>



</div>

<div className="contactText">

<br/>


<Container>
	<Row className="footerConRow">

    <Col className="h2 text-center" xs={12} 
	data-aos="fade-right"
    data-aos-delay="3000"
    data-aos-duration="1300"
    data-aos-easing="ease-out-cubic"
    data-aos-once="false"
	 style={imeColor} >CONTACT</Col>

		<Col className=" text-light text-center" xs={8} 
	data-aos="fade-up"
    data-aos-delay="1500"
    data-aos-duration="1300"
    data-aos-easing="ease-in-out"
    data-aos-once="false"
	>
          <Form onSubmit={this.sendEmailAndMessage}>
			  <FormGroup>
		  <Form.Text className="text-light text-left h6">
  goranivankovic87@gmail.com
    </Form.Text>
	<br></br>
	<Form.Text className="text-light text-left h6">
  +381/064/415-68-13
    </Form.Text>

	</FormGroup>
            


              <FormGroup>
                  <FormLabel className="float-left" >Email</FormLabel>
                  <FormControl type="email" placeholder="Enter a Email..." name="email" />

              </FormGroup>

                    <Form.Group>
                    <FormLabel className="float-left">Message</FormLabel>
                        
                        <FormControl  name="message" as="textarea" placeholder="Send Message..." rows="5"/>
                    </Form.Group>
                    <Button className="float-left" type="submit">Send</Button>
                </Form>

    </Col>
	</Row>
</Container>
<br/>

<Container>
	<Row>
		<Col className="text-center" xs={12}>
	<Link to='/'><Button className="btn-xl bg-transparent"
		data-aos="fade-left"
		data-aos-delay="2000"
		data-aos-duration="1300"
		data-aos-easing="ease-out-cubic"
		data-aos-once="false"
		onMouseOver={this.mouseOnLi} onMouseLeave={this.mousOutLi}>NEXT
		</Button></Link>	
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
