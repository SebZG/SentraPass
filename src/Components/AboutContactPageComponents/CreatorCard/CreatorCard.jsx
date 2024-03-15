import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import RotatingSphere from '../RotatingSphere'

import './CreatorCard.css'

function CreatorCard(props) {

   // const [showSkills, setShowSkills] = useState(false);

   const handleClick = () => {
      if (!props.diableViewSkills) {
         props.setShowSkills(props.id);
      }
   }


   if (props.showSkills) {
      return <RotatingSphere id={props.id} setDisplayedCreatorId={props.setDisplayedCreatorId} skills={props.skills} />
   }

   return (
      <div id='creator-card' className='row'>
         <div className="card">
            <div className="img-container">
               <img src={props.img} alt="" />
            </div>
            <h3 class="props.name">{props.name}</h3>
            <p>{props.desc}</p>
            <p onClick={!props.diableViewSkills ? handleClick : null}>VIEW SKILLS</p>
            <div className="icons">
               <a href={props.github} target="_blank">
                  <FontAwesomeIcon icon={faGithub} color="var(--Color-Secondary)" className="anchor-icon" />
               </a>
               <a href={props.linkedin} target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} color="var(--Color-Secondary)" className="anchor-icon" />
               </a>
               <a href={props.email} target="_blank">
                  <FontAwesomeIcon icon={faEnvelope} color="var(--Color-Secondary)" className="anchor-icon" />
               </a>
            </div>
         </div>
      </div>
   )
}

export default CreatorCard;