/* eslint-disable default-case */
import * as React from 'react';
import {useState} from 'react';
import './App.css';
import './home.css';
import Album from './Album.js';
import Songs from './Songs.js';
import Menu from './Products.js';


function App (){
  const [menu_show,setState] = useState(false);

const [list_, setList] = useState(false);
const [handleStyle1, setStyles1] = useState({
    backgroundColor:"blue",
    color:"white", 
    }   
)

const [mutexB,setMutexB] = useState(true);
const [handleStyle2, setStyles2] = useState({
  backgroundColor:"",
  color:"",
  }   
)
const [handleStyle3, setStyles3] = useState({
  backgroundColor:"",
  color:"",
  }    
)
const [handleStyle4, setStyles4] = useState({
  backgroundColor:"",
  color:"",
  }   
)
  const [menuItem,setMenu] = useState({
    play:false,
    move:0,
  });
const [value, setVal]  = useState(1)
const [songs, setCart] = useState([{
  title:"first",
  artist: "unknown1",
  src:"https://www.shortmusicclips.com/previews/epic-drums-15sec.mp3",
  show:false,
  num:1
  },
  {
    title:"second",
    artist: "unknown2",
    src:"https://www.shortmusicclips.com/previews/epic-drums-15sec.mp3",
    show:true,
    num:2
}]
)
  /*constructor(){
    super();
    this.state={
        songs:[
            {
title:"first",
                artist: "unknown1",
                src:"https://www.shortmusicclips.com/previews/epic-drums-15sec.mp3",
                show:false,
                num:1
            },
            {
                title:"second",
                artist: "unknown2",
                src:"https://www.shortmusicclips.com/previews/epic-drums-15sec.mp3",
                show:false,
                num:2
            }
        ],
        menu:[{song_list:false, album:false, playlist:345,menu_show:true,id:1}]
    }
}*/

/*handleSonglist=()=>{
  const {songs, menu_button} = this.state;
  
  this.setState({
    menu_on:false
  })
  songs.map((item)=>{
    item.show = true
  })
  this.setState({
    songs
  })
}*/
function Menu_Items(Value){
  switch(Value){
    case 1:
      setStyles1((previousState)=>{
        return{...previousState, backgroundColor:"blue",color:"white"};
      })
      setStyles2((previousState)=>{
        return{...previousState, backgroundColor:"",color:""};
      })
      setStyles3((previousState)=>{
        return{...previousState, backgroundColor:"",color:""};
      })
      setStyles4((previousState)=>{
        return{...previousState, backgroundColor:"",color:""};
      })
      break;
    case 2:
      setStyles2((previousState)=>{
        return{...previousState, backgroundColor:"blue",color:"white"};
      })
      setStyles1((previousState)=>{
        return{...previousState, backgroundColor:"",color:""};
      })
      setStyles3((previousState)=>{
        return{...previousState, backgroundColor:"",color:""};
      })
      setStyles4((previousState)=>{
        return{...previousState, backgroundColor:"",color:""};
      })
      break;
    case 3:
      setStyles3((previousState)=>{
        return{...previousState, backgroundColor:"blue",color:"white"};
      })
      setStyles1((previousState)=>{
        return{...previousState, backgroundColor:"",color:""};
      })
      setStyles2((previousState)=>{
        return{...previousState, backgroundColor:"",color:""};
      })
      setStyles4((previousState)=>{
        return{...previousState, backgroundColor:"",color:""};
      })
      break;
      case 4:
        setStyles4((previousState)=>{
          return{...previousState, backgroundColor:"blue",color:"white"};
        })
        setStyles1((previousState)=>{
          return{...previousState, backgroundColor:"",color:""};
        })
        setStyles2((previousState)=>{
          return{...previousState, backgroundColor:"",color:""};
        })
        setStyles3((previousState)=>{
          return{...previousState, backgroundColor:"",color:""};
        })
        break;
  }
}

function upClick(){
  while(!mutexB);
  setMutexB(false);
  if(value === 0){
    Menu_Items(3);
    setVal(3);
    setMutexB(true);
    return
  }
  else if(value === 1){
    Menu_Items(4);
    setVal(0);
    setMutexB(true);
  }
  else{
  Menu_Items(value-1);
  setVal((value-1)%4);
  setMutexB(true);
  }
}

function downClick(){
  while(!mutexB);
  setMutexB(false);
  Menu_Items(value+1);
  setVal((value+1)%4)
  setMutexB(true);
  console.log("down:",value);
}
function playClick(){
  setMenu((previousState)=>{
 return{...previousState, play:true}
  });
  
}

document.addEventListener("touchstart",e =>{
  console.log("start")
  console.log(e);
})
document.addEventListener("touchmove",e =>{
  console.log("move")
  console.log(e);
})
document.addEventListener("touchend",e =>{
  console.log("end")
})

/*window.addEventListener('scroll',function (){
  if(window.pageYOffset > 50){
    document.body.style.background = "red";
  } 
  else if(this.window.pageYOffset <50){
    document.body.style.background = "white";
  }
});*/

function circleClick(){
  console.log("value:",value);
  switch(value){
    case 1:
      setList(true);
      setState(false);
      break;
  }
}

function SongClick(){
  setList(true);
  setState(false);
}

function menuClick(){
  /*const {menu} = this.state;
  console.log("done");
  this.setState({
    menu_show:false,
    menu
  });*/
  if(menu_show){
   setState(false)
  }
  else{
    setState(true);
    setList(false);
  }
}

 // render(){
  //  const {songs} = this.state;
  //  const {menu} = this.state;
    return (
      <div className="App">
        {/*<h1 id="hel" style={{textAlign:"left", height:'2000px'}}>Hello</h1>*/}
          <div className="ipad">
          <div className="screen"> 
            <img className="bg_image"
             src="https://tse1.mm.bing.net/th?id=OIP.EXsDdyu_ZfRuKnUINaKCsgHaE8&pid=Api&P=0&w=250&h=166" 
             alt=""/>
            <div id="name" style={{fontSize:12,fontFamily:"sherif"}} >iPod</div>
            {
              menu_show? <Menu 
              onStyle1= {handleStyle1}
              onStyle2= {handleStyle2}
              onStyle3= {handleStyle3}
              onStyle4 = {handleStyle4}
              />
              :null
            }
            {list_ && songs.map((song)=>{
                return(  
                song.show && <Songs song={song}
                  key={song.num}
                  />
                )
            })
          }
          </div>
          <Album
          data = {menuClick}
          up_click = {upClick}
          down_click = {downClick}
          play_click = {playClick}
          circle_click= {circleClick}
          />
          </div>
      </div>
    )
}
export default App;
