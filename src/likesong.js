import React from 'react';
import './home.css';

const Likesong =(props)=>{
    return (
        <>
        <li><div  className='song_list' style={props.onstyle2} ><strong>{props.song_name}</strong>
        <br></br><span style={{fontSize:"12px"}}>{props.song_artist}</span></div></li>
        </>
    );


}

export default Likesong; 