import React from 'react';
import './home.css';

function Menu(props){ 
    
    return(
        <>
          <ul>
                <li><div style={props.onStyle1}>Songs </div></li>
                <li><div style={props.onStyle2}>Album </div></li>
                <li><div style={props.onStyle3}>Artist</div></li>
                <li><div style={props.onStyle4}>Playlist</div></li>
            </ul>      
        </>
    );

}
export default Menu;