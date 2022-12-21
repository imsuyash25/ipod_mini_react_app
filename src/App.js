/* eslint-disable default-case */
import * as React from 'react';
import {useState} from 'react';
import './App.css';
import './home.css';
import Album from './Album.js';
import Songs from './Songs.js';
import Menu from './Products.js';
import Songlist from './Songlist.js';
import Likesong from './likesong.js';

function App(){
//const[songs,setCart] = props.songs;
const [menu_show, setState] = useState(false);
const [list_, setList] = useState(false);
const [onplay, setPlay] = useState(true);
const [mutexB,setMutexB] = useState(true);
const [songlist, setAlbum] = useState(false);

const [value, setVal]  = useState(1);
const [nextsong, setNext] = useState(1);
const [prevsong,setPrev] = useState(0);
const [value2, setVal2] = useState(0);
const [likemenu, setlikemenu] = useState(false);
const [countlike, setCountlike] = useState(0);
const [handleStyle1, setStyles1] = useState({
backgroundColor:"blue",
color:"white", 
}   
)
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
//const [initial, setFirst] = useState(false);
const [style2, setStylein] = useState({
  backgroundColor:"blue",
  color:"white",
})

const [menuItem, setMenu] = useState({
play:false,
move:0,
  });



const [songs, setCart] = useState([
  {
  title:"Srivalli",
  artist: "Javel Ali, Pushpa the rise" ,
  src:"https://pagalworld.com.se/files/download/id/5103",
  show:true,
  bgimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2i65tjWwtXJuHi54zHBmB32oqVwosRqsszQ&usqp=CAU",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbk-FetjUOWyRouuER6mEcEDGEsNbGXvaE5Q&usqp=CAU",
  like:false,
  like_src:"https://cdn.iconscout.com/icon/free/png-128/heart-1161-457786.png",
  num:0
  },
  {
title:"We Rollin",
artist: " Shubh, Anabolic Beatz",
src:"https://pwdown.info/113515/We%20Rollin%20-%20Shubh.mp3",
show: false,
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe4do0hZsl_3pSTivOTRUtKgc_FQgTqGWalg&usqp=CAU",
bgimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe4do0hZsl_3pSTivOTRUtKgc_FQgTqGWalg&usqp=CAU",
like:false,
like_src:"https://cdn.iconscout.com/icon/free/png-128/heart-1161-457786.png",
num:1
},
{
  title:"Perfect",
  artist:"E.D. Sheeran, POP, 2017",
  src:"https://geckofeeds.com/wp-content/uploads/2022/07/Ed_Sheeran_-_Perfect.mp3",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68L6s8V5nEac6X87dU7NovGgMinFVBOzlog&usqp=CAU",
  bgimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjM8HblTTo_FD5syjJX1QCKsLblLibRZePw&usqp=CAU",
  show:false,
  like:false,
  like_src:"https://cdn.iconscout.com/icon/free/png-128/heart-1161-457786.png",
  num:2
},
{
  title:"Kesariya",
  artist: "Arijit Singh, Pritam, Amitabh Bhattacharya",
  src:"https://pagalworld.com.se/files/download/id/6591",
  show: false,
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVMSo4A9w74DS5KlhfvCO1tDP2ycS8-bMgHg&usqp=CAU",
  bgimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD7ZKNh2wEgbVrOXwlvec-pO7hyTgaUWRskg&usqp=CAU",
  like:false,
  like_src:"https://cdn.iconscout.com/icon/free/png-128/heart-1161-457786.png",
  num:3
},
{
  title:"Kesariya2",
  artist: "Arijit Singh, Pritam, Amitabh Bhattacharya",
  src:"https://pagalworld.com.se/files/download/id/6591",
  show: false,
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVMSo4A9w74DS5KlhfvCO1tDP2ycS8-bMgHg&usqp=CAU",
  bgimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD7ZKNh2wEgbVrOXwlvec-pO7hyTgaUWRskg&usqp=CAU",
  like:false,
  like_src:"https://cdn.iconscout.com/icon/free/png-128/heart-1161-457786.png",
  num:4
},
{
  title:"Perfect2",
  artist:"E.D. Sheeran, POP, 2017",
  src:"https://geckofeeds.com/wp-content/uploads/2022/07/Ed_Sheeran_-_Perfect.mp3",
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68L6s8V5nEac6X87dU7NovGgMinFVBOzlog&usqp=CAU",
  bgimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZjM8HblTTo_FD5syjJX1QCKsLblLibRZePw&usqp=CAU",
  like:false,
  show:false,
  like_src:"https://cdn.iconscout.com/icon/free/png-128/heart-1161-457786.png",
  num:5
}
 ])

let count = 0;
songs.forEach(()=>{
  count += 1;
})
const [numsong, setCount] = useState(count);

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

function play_song_now(val2){
  setAlbum(false);
  setlikemenu(false);
  setCart(songs.map((song,index) =>
    index === val2? {...song, show:true}:{...song, show:false}
  ));
  setList(true);
}
function upClick(){ 
  if(list_){
    prev_song();
    return;
  }
  else if(songlist || likemenu){
    (value2===0)? setVal2(numsong-1):setVal2(value2-1);
    return;
  }
  while(!mutexB);
  setMutexB(false);

  if(value === 0){
    Menu_Items(3);
    setVal(3);
    setMutexB(true);
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
  if(list_){
    next_song();
    return;
  }
  else if(songlist || likemenu){
    console.log(value2);
    setVal2((value2+1)%numsong);
    return;
  }
  while(!mutexB);
  setMutexB(false);
  Menu_Items(value+1);
  setVal((value+1)%4)
  setMutexB(true);
}
function playClick(){
  if(onplay){
    setPlay(false);
    console.log("pause");
  }
  else 
  {
    setPlay(true);
    console.log("play");
  }
}
function circleClick(){
  if(menu_show){
    switch(value){
      case 1:
        setList(true);
        setState(false);
        break;
      case 2:
        setAlbum(true);
        setState(false);
        setVal2(0);
        break;
      case 3:
        setlikemenu(true);
        setState(false);
        setVal2(0);
        break;
    }
  }
  if(songlist || likemenu){
    switch(value2){
      case value2: 
        play_song_now(value2);
        break;
    }
  }
}
function next_song(){
    songs.forEach((song,index)=> song.show?setNext((index+1)%numsong):null)
    setCart(
      songs.map((song,index)=> index === nextsong?{...song, show:true}:{...song,show:false} 
      )
    );
    nextsong===0? setPrev(numsong-1):setPrev(nextsong-1);
    setNext((nextsong+1)%numsong);
    console.log(nextsong); 
}
function prev_song(){
  nextsong-1 ===0 ? setPrev(numsong-1):setPrev(nextsong-2);
  setCart(

    songs.map((song,index)=> index === prevsong?{...song, show:true}:{...song,show:false} 
    )
  );
  prevsong=== 0? setPrev(numsong-1):setPrev(prevsong-1);
  console.log(prevsong); 
}
function handlelike(song){
  let number = songs.indexOf(song);
  if(song.like){setCart(songs.map((song1,index )=> index === number? {...song1,
     like:false, like_src:"https://cdn.iconscout.com/icon/free/png-128/heart-1161-457786.png"}:{...song1}));
     setCountlike(countlike-1);
  }
  else{
    setCart(songs.map((song1,index )=> index === number? {...song1,
      like:true, like_src:"https://cdn.iconscout.com/icon/free/png-128/heart-love-like-favorite-romance-gift-16-28686.png"}:{...song1}));
      setCountlike(countlike+1);
  }
}


/*useEffect(()=> {
  if(songlist && !initial){
    setStylein({background:"blue",color:"white"});
    setFirst(true);
  }
})*/

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
    setAlbum(false);
    setlikemenu(false);
  }
}
// render(){
//  const {songs} = this.state;
//  const {menu} = this.state;
  return (
      <div className="App">
    {/*<h1 id="hel" style={{textAlign:"left", height:'2000px'}}>Hello</h1>*/}
      <div className="ipad"> 
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
    {(likemenu && countlike === 0)? <div className='countlike'> No Song liked !
    <img className="Nolikemoji" src="https://cdn-icons-png.flaticon.com/128/742/742752.png" alt ="emoji" /></div> :null}
    {
    songlist? <ul className='product2'>{songs && songs.map((song,index) =>{
      return(
    index >= value2 && index < (value2+4) && <Songlist song = {song}
    key = {index} 
    song_name = {song.title} 
    song_artist = {song.artist}
    onstyle2 = {value2===index ? style2:null}
    />
      )
    })
    }</ul>
    :null
      }
    {
      likemenu? <ul className = 'product2'>{
        songs && songs.map((song,index)=>{
          return (
            song.like &&  < Likesong song = {song}
            key = {index} 
            song_name = {song.title} 
            song_artist = {song.artist}
            onstyle2 = {value2===index ? style2:null}
          />
          )
        })
      }</ul>
      :null
    }
    {list_ && songs && songs.map((song,index) => {
    return(  
    song.show && <Songs song={song}
    key={index} onplay = {onplay}
    onLike = {handlelike}
    />
    )  
    }) 
    }
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
