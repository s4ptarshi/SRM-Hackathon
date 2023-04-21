import React from 'react';
import "./comp.css"

const Wave = () => {
  return (
/*     < svg xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 1440 320" >
      <path fill="#CFFFE7" d="M0,128L60,112C120,96,240,64,360,69.3C480,75,600,117,720,149.3C840,181,960,203,1080,186.7C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
    </svg > */
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="2.65%" stop-color="#CFFFE7" />
        <stop offset="101.33%" stop-color="#F9F8F4" />
      </linearGradient>
    </defs>
    <path fill="url(#gradient)" d="M0,128L60,112C120,96,240,64,360,69.3C480,75,600,117,720,149.3C840,181,960,203,1080,186.7C1200,171,1320,117,1380,90.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
  </svg>
  
  );
}

export default Wave;
    {/*  <svg viewBox="0 0 1440 320">
    <path fill="white" d="M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,256C672,267,768,245,864,234.7C960,224,1056,224,1152,218.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
  </svg>  */}