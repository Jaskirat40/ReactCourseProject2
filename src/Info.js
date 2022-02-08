import React from 'react';
import './Info.css';
import img from './IMG.jpg'

export default function Info() {
  return (
    <div className='info--wrapper'>
        <img className='info--img' src={img}/>
        <div className='info--content'>
          <span className='info--name'>Jaskirat Singh</span>
          <small className='info--occupation'>Frontend developer</small>
          <span className='info--website'>jaskiratsingh.website</span>
          <div className='info--buttons'>
              <button className='info--button1'><span style={{fontSize: "10px",paddingRight:"2px"}} class="material-icons">
              email</span>Email</button>
              <button className='info--button2'><span class="iconify" data-icon="mdi:linkedin"></span>
              Linkedin</button>
        </div>
      </div>
    </div>
  )
}
