import React from 'react';
import './home.css';

function Album(props){
  //const {menu_on} = props.menu_button;
 return(
    <div className="container">
    <div className="circle"> 
      <img id="menu" 
        className="action-icons"  
        src="https://cdn-icons-png.flaticon.com/128/17/17704.png" alt="menu" 
        onClick={props.data}/>
        <img  id= "left" 
        className="action-icons" 
        src="https://cdn-icons-png.flaticon.com/128/271/271220.png" alt="up"
        onClick={props.up_click}/>
        <img id= "right"
        className="action-icons" 
        src="https://cdn-icons-png.flaticon.com/128/271/271228.png" alt="down" 
        onClick={props.down_click}/>
        <img id = "pause" 
        className="action-icons" 
        src="https://cdn-icons-png.flaticon.com/128/786/786279.png" alt="play"
        onClick={props.play_click}/>
            
        <div className="circle2" onClick={props.circle_click}></div>
        </div>
    </div>
      );
  }
export default Album;