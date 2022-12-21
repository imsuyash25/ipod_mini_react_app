import React from 'react';
import './home.css';

function Menu(props){ 
    
    return(
        <>
          <ul className="product">
                <li><div  className="listmenu" style={props.onStyle1}>Songs </div></li>
                <li><div  className="listmenu" style={props.onStyle2}>Album </div></li>
                <li><div  className="listmenu" style={props.onStyle3}>Liked</div></li>
                <li><div  className="listmenu" style={props.onStyle4}>Artist</div></li>
            </ul>      
        </>
    );

}
export default Menu;