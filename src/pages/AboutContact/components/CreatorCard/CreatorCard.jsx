import React from 'react'
import './CreatorCard.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
function CreatorCard(props) {
   return (
      <>
         <div className="card">
            <div className="img-container">
               <img src={props.img} alt="" />
            </div>
            <h3>{props.name}</h3>
            <p>{props.desc}</p>
            <div className="icons">
               <a href={props.github}>
                  <FontAwesomeIcon icon={faGithub} color="var(--Color-Tertiary)" className="anchor-icon" />
               </a>
               <a href={props.linkedin}>
                  <FontAwesomeIcon icon={faLinkedin} color="var(--Color-Tertiary)" className="anchor-icon"/>
               </a>
               <a href={props.email}>
                  <FontAwesomeIcon icon={faEnvelope} color="var(--Color-Tertiary)" className="anchor-icon" />
               </a>
            </div>
         </div>
      </>
   )
}

export default CreatorCard