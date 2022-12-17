import React from 'react';
import './home.css';

function Songlist(props){
    return (
        <>
        <div className='song_list'>
        <h1>Popular and trending</h1>
        <div>{props.song_name}</div>
        <h1 id="songabout">{props.song_artist}</h1>
        </div>
        </>
    );


}

export default Song_list; 