import * as React from 'react';
import './home.css';

const Songs=(props)=>{
    const{title, src,artist} = props.song;
    return(
        <>
        <div className = "img_song">
            <img  className = "img_song"
            src="https://tse4.mm.bing.net/th?id=OIP.byj4-96U5Si4Sg6e1PFFiQHaHa&pid=Api&P=0&w=166&h=166"
            alt="song.img"/>
        </div>
            <div className="song_info">
                <div>Title: {title}</div>
                <div>Artist: {artist}</div>
            </div>
            <audio className="Audio" controls>
                <source src={src} type="audio/ogg"/>
            </audio>
        </>
    );
}
export default Songs;