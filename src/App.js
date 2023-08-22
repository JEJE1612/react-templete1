import React, { Component } from 'react'
import './App.css'
import image1 from './photo/photo-1438761681033-6461ffad8d80.jpg'
import {BsFillBriefcaseFill}  from "react-icons/bs";
import { AiFillBank ,AiFillMail,AiFillPhone} from "react-icons/ai";
import { FiSun } from "react-icons/fi";
import { FcGlobe } from "react-icons/fc";
import { BsFillCalendar2DateFill ,BsFillBrightnessHighFill,BsWhatsapp,BsTwitter,BsLinkedin,BsMessenger } from "react-icons/bs";

export class App extends Component {
  render() {
    return (
      <div>
        <div className='div1'>
          <div >
          < img src={image1} width={450} height={250} />
          <BsFillBriefcaseFill color='green' size={20} style={{position:'absolute',left:'30px',top:'275px'}}/>
          <p style={{position:'absolute',left:'70px',top:'257px'}}>Designer</p>
          <AiFillBank color='green' size={20} style={{position:'absolute',left:'30px',top:'300px'}}/>
          <p style={{position:'absolute',left:'70px',top:'285px'}}>london,uk</p>
          <AiFillMail color='green' size={20} style={{position:'absolute',left:'30px',top:'330px'}}/>
          <p style={{position:'absolute',left:'70px',top:'315px'}}>ex@gmail.com</p>
          <AiFillPhone color='green' size={20} style={{position:'absolute',left:'30px',top:'360px'}}/>
          <p style={{position:'absolute',left:'70px',top:'345px'}}>01030984219</p>
          </div>
          <hr style={{width:'440px',marginTop:'140px'}}/>
          <FiSun color='green'size={20} style={{position:'absolute',left:'10px'}}/>
          <p style={{position:'absolute',left:'50px',marginTop:'0px'}}>Skills</p>
          <div style={{position:'absolute',top:'430px',width:'400px'}}>
          <label for="points" style={{marginLeft:'30px'}} >Adoble photoshop</label>
          <br/>
          <input type="range" id="volume" name="volume"style={{backgroudColor: 'green'}} min="0" max="11" />
          <label for="points" style={{marginLeft:'30px'}} >Media</label>
          <br/>
          <input type="range" id="volume" name="volume"style={{backgroudColor: 'green'}} min="0" max="11" />
          <label for="points" style={{marginLeft:'30px'}} >Photography</label>
          <br/>
          <input type="range" id="volume" name="volume"style={{backgroudColor: 'green'}} min="0" max="11" />         
          </div>
          <FcGlobe style={{marginTop:'170px',marginLeft:'20px'}} />
          <p style={{position:'absolute',left:'50px',top:'555px'}}>Langauge</p>
          <div style={{position:'absolute',top:'610px',width:'400px'}}>
          <label for="points" style={{marginLeft:'30px'}} >English</label>
          <br/>
          <input type="range" id="volume" name="volume"style={{backgroudColor: 'green'}} min="0" max="11" />
          <label for="points" style={{marginLeft:'30px'}} >French</label>
          <br/>
          <input type="range" id="volume" name="volume"style={{backgroudColor: 'green'}} min="0" max="11" />
          </div>
         



        </div>
        <div className='div2'>
        <BsFillBriefcaseFill color='green' size={50} style={{position:'absolute',left:'30px',top:'25px'}}/>
        <p style={{position:'absolute',left:'120px',top:'2px',fontSize:'30px'}}>Work Experience</p>
        <h4 style={{position:'absolute',left:'60px',top:'70px'}} >FrontEnd Developer/ w3school.com</h4>
        <BsFillCalendar2DateFill size={20} color='green'style={{position:'absolute',left:'60px',top:'115px'}}/>
        <p style={{position:'absolute',left:'120px',top:'2px',color:'green',marginLeft:'0px',marginTop:'111px'}}>jun 2015</p>
        <p style={{position:'absolute',top:'140px',width:'800px',left:'60px'}}>
        lorem iqsum dolor sit amet.praesentium magnam constructor vel in deserunt aspernatur est reprehenderit sunthic. Nuila
            tempora soluta ea et odio, unde dolormque repellendus iure,iste 
        </p>
        <h4 style={{position:'absolute',left:'60px',top:'200px'}} > Webdeveloper / something.com</h4>
        <BsFillCalendar2DateFill size={20} color='green'style={{position:'absolute',left:'60px',top:'250px'}}/>
        <p style={{position:'absolute',left:'120px',top:'2px',color:'green',marginLeft:'0px',marginTop:'250px'}}>mar 2012-dec 2014</p>
        <p style={{position:'absolute',top:'270px',width:'800px',left:'60px'}}>
        lorem ipsum dolor sit amet, consectetuer adipisicing  </p>
        <h4 style={{position:'absolute',left:'60px',top:'300px'}} > Graphic Designer / desighsomething.com</h4>
        <BsFillCalendar2DateFill size={20} color='green'style={{position:'absolute',left:'60px',top:'350px'}}/>
        <p style={{position:'absolute',left:'120px',top:'2px',color:'green',marginLeft:'0px',marginTop:'350px'}}>jun 2010-mar 2012</p>
        <p style={{position:'absolute',top:'370px',width:'800px',left:'60px'}}>
        lorem ipsum dolor sit amet, consectetuer adipisicing  </p>


        </div>
        <div className='div3'>
          <BsFillBrightnessHighFill size={40} color='green' style={{position:'absolute',left:'30px',top:'25px'}}/>
          <p style={{position:'absolute',left:'80px',top:'-5px',fontSize:'30px'}}>Education </p>
          <h3 style={{position:'absolute',left:'60px',top:'50px'}}>w3school.com</h3>
          <BsFillCalendar2DateFill size={20} color='green'style={{position:'absolute',left:'60px',top:'95px'}}/>
          <p style={{position:'absolute',left:'100px',top:'80px'}}>forever</p>
          <p style={{position:'absolute',top:'120px',width:'800px',left:'60px'}}>
          Web Development All need to know in one place </p>

        </div>
        <footer style={{width:'100%',height:'90px',marginTop:'750px',backgroundColor:'green'}}>
          <p style={{textAlign:'center',color:'white'}}>find me in social media</p>
          <div style={{position:'absolute',left:'720px'}}>
          <BsMessenger color='white'/>
          <BsTwitter color='white'/>
          <BsLinkedin color='white'/>
          <BsWhatsapp color='white'/>
          </div>
          <p style={{textAlign:'center',color:'white',marginTop:'40px'}}>prowed by w3school </p>
        

        </footer>
                  
      </div>
    )
  }
}

export default App
