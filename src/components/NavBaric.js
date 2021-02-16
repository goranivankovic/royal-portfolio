import React, { Component } from 'react'
import Anime from 'react-anime'
import { FiHome } from 'react-icons/fi';
import Media from "react-media"

export default class NavBaric extends Component {
    constructor(){
        super()


        this.mouseOnLi=this.mouseOnLi.bind(this)
        this.mousOutLi=this.mousOutLi.bind(this)
    }

    mouseOnLi(a){
        a.target.style.opacity='1'
        a.target.style.color='#ffa500'
        a.target.style.transform='scale(0.92)'
        a.target.style.transition='800ms'
    }

    mousOutLi(b){
        b.target.style.opacity='0.8'
        b.target.style.color='azure'
        b.target.style.transform='scale(1)'
        b.target.style.transition='800ms'


    }


    render() {
        return (





            <Media query={{ maxWidth: 599 }}>
            {matches =>
              matches ? (
             <p>adsada</p>
                ) : (


                    

            <div className="navBaricMain">

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




              
               )
             }
           </Media>







        )
    }
}
