<<<<<<< HEAD
<<<<<<< HEAD:src/pages/AboutContact/components/CreatorCard/CreatorCard.jsx
import React, { useState, useEffect } from 'react';
import './CreatorCard.css'
import ReactDOM from 'react-dom'
=======
import { useState } from 'react';

>>>>>>> 51b2657 (fix login/signup form // Organization // CSS Overhaul):src/Components/AboutContactPageComponents/CreatorCard/CreatorCard.jsx
=======
import { useState } from 'react';

>>>>>>> 51b2657 (fix login/signup form // Organization // CSS Overhaul)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import RotatingSphere from '../RotatingSphere'

import './CreatorCard.css'

function CreatorCard(props) {

<<<<<<< HEAD
   const [isFlipped, setIsFlipped] = useState(false);

   const handleClick = () => {
<<<<<<< HEAD:src/pages/AboutContact/components/CreatorCard/CreatorCard.jsx
      if (!props.disableViewSkills) {
         setIsFlipped(true);
      } 
   }

   useEffect(() => {
      if (isFlipped && !props.disableViewSkills) {
         const timer = setTimeout(() => {
            props.setShowSkills(props.id);
         }, 700);

         return () => clearTimeout(timer); 
      }
   }, [isFlipped, props]);
   
   useEffect(() => {
      if (!props.showSkills) setIsFlipped(false);
   }, [props.showSkills]);
   
=======
=======
   // const [showSkills, setShowSkills] = useState(false);

   const handleClick = () => {
>>>>>>> 51b2657 (fix login/signup form // Organization // CSS Overhaul)
      if (!props.diableViewSkills) {
         props.setShowSkills(props.id);
      }
   }


<<<<<<< HEAD
>>>>>>> 51b2657 (fix login/signup form // Organization // CSS Overhaul):src/Components/AboutContactPageComponents/CreatorCard/CreatorCard.jsx
=======
>>>>>>> 51b2657 (fix login/signup form // Organization // CSS Overhaul)
   if (props.showSkills) {
      return <RotatingSphere id={props.id} setDisplayedCreatorId={props.setDisplayedCreatorId} skills={props.skills} />
   }

   return (
<<<<<<< HEAD
<<<<<<< HEAD:src/pages/AboutContact/components/CreatorCard/CreatorCard.jsx
      <>
         <div className={`card-flipper-container ${isFlipped ? "flipped" : ""}`} onClick={handleClick}>
         <div className="card-flipper">
         <div className="card" id='card'>
=======
      <div id='creator-card' className='row'>
         <div className="card">
>>>>>>> 51b2657 (fix login/signup form // Organization // CSS Overhaul):src/Components/AboutContactPageComponents/CreatorCard/CreatorCard.jsx
=======
      <div id='creator-card' className='row'>
         <div className="card">
>>>>>>> 51b2657 (fix login/signup form // Organization // CSS Overhaul)
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
<<<<<<< HEAD
<<<<<<< HEAD:src/pages/AboutContact/components/CreatorCard/CreatorCard.jsx
         </div>
         </div>
      </>
=======
      </div>
>>>>>>> 51b2657 (fix login/signup form // Organization // CSS Overhaul):src/Components/AboutContactPageComponents/CreatorCard/CreatorCard.jsx
=======
      </div>
>>>>>>> 51b2657 (fix login/signup form // Organization // CSS Overhaul)
   )
}

export default CreatorCard;