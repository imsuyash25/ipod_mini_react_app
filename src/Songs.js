import * as React from 'react';
import './home.css';

const Songs=(props)=>{
    const{title, src,artist,img,bgimg,like_src} = props.song;
    return(
        <>
        <img className="bg_image_song"
             src={bgimg} 
             alt=""/>
        <div className = "img_song">
            <img  className = "img_song"
            src={img}
            alt="song.img"/>
        </div>
        <div className="Liked" > 
            <img className="Liked" src={like_src} onClick = {()=> props.onLike(props.song)} alt="like"/>
        </div>
        <div className="song_info">
            <div>Title: {title}</div>
            <div>Artist: {artist}</div>
        </div>
        <audio className="Audio" controls>
            <source src={src}  type="audio/ogg"/>
        </audio>
        
        </>
    );
}
export default Songs;