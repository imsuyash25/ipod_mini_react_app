import React, {Component} from 'react';
import App from './App';

class Gaane extends Component {
    constructor(){
        super();
        this.state = {
            songs: [
                {
                title:"Deva Deva",
                artist: "Arijit, Pritam, Kamaal Khan" ,
                src:"https://www.shortmusicclips.com/previews/epic-drums-15sec.mp3",
                show:false,
                num:0
                 },
                    {
                      title:"O Jaana",
                      artist: "Udit Narayan, Alka Yagnik",
                      src:"https://www.shortmusicclips.com/previews/epic-drums-15sec.mp3",
                      show: false,
                      num:1
                  },
                  {
                    title:"Ek Ladhki Ko Dekha Toh Aisa Laga",
                    artist: "Darshan Raval, Rochak Kohli, R.D Burman",
                    src:"https://www.shortmusicclips.com/previews/epic-drums-15sec.mp3",
                    show: true,
                    num:2
                  },
                  {
                    title:"Kesariya",
                    artist: "Arijit Singh, Pritam, Amitabh Bhattacharya",
                    src:"https://www.shortmusicclips.com/previews/epic-drums-15sec.mp3",
                    show: false,
                    num:3
                  },
            ],
        };
    }
}

export default Gaane;