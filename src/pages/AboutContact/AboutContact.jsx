import React, { useState, useEffect } from 'react';
import './AboutContact.css'
import ContactUsForm from './components/ContactUsForm/ContactUsForm';
import CreatorCard from './components/CreatorCard/CreatorCard';
import RotatingSphere from './components/RotatingSphere/RotatingSphere';


const AboutContact = () => {
      let creators = 
      [
         {
            "id": 1,
            "name": "Sebastian",
            "img": "src/assets/images/seb_profile_pic.png",
            "desc": "Full Stack Developer",
            "github": "https://github.com/SebZG",
            "linkedin": "https://www.linkedin.com/in/sebastian-z-g/",
            "email": "pCZ8x@example.com",
            "skills": ["HTML", "CSS", "SASS", "JavaScript", "React","Vue", "Nuxt", "NodeJS", "Babel", "Jquery", "ES6", "GIT", "GITHUB"]
         },
         {
            "id": 2,
            "name": "Ana",
            "img": "src/assets/images/ana_profile_pic.png",
            "desc": "Front End Developer",
            "github": "https://github.com/anadomuta",
            "linkedin": "https://www.linkedin.com/in/ana-domuta/",
            "email": "pCZ8x@example.com",
            "skills": ["HTML", "CSS", "SASS", "JavaScript", "React", "Vue", "Nuxt", "NodeJS", "Babel", "Jquery", "ES6", "GIT", "GITHUB"]
         },
         {
            "id": 3,
            "name": "Harry",
            "img": "src/assets/images/harry_profile_pic.png",
            "desc": "Front End Developer",
            "github": "https://github.com/hpro97",
            "linkedin": "https://www.linkedin.com/in/harryprobert/",
            "email": "pCZ8x@example.com",
            "skills": ["HTML", "CSS", "SASS", "JavaScript", "React", "Vue", "Nuxt", "NodeJS", "Babel", "Jquery", "ES6", "GIT", "GITHUB"]
         },
         {
            "id": 4,
            "name": "Aaron",
            "img": "src/assets/images/aaron_profile_pic.png",
            "desc": "Front End Developer",
            "github": "https://github.com/aaron1490",
            "linkedin": "https://www.linkedin.com/in/aaron-armstrong-%E8%89%BE%E4%BF%8A%E6%A8%82-80986ba5/",
            "email": "pCZ8x@example.com",
            "skills": ["HTML", "CSS", "SASS", "JavaScript", "React", "Vue", "Nuxt", "NodeJS", "Babel", "Jquery", "ES6", "GIT", "GITHUB"]
         },
         {
            "id": 5,
            "name": "Conner",
            "img": "src/assets/images/conner_profile_pic.png",
            "desc": "Front End Developer",
            "github": "https://github.com/Crar96",
            "linkedin": "https://www.linkedin.com/in/sebastian-ziegler/",
            "email": "pCZ8x@example.com",
            "skills": ["HTML", "CSS", "SASS", "JavaScript", "React", "Vue", "Nuxt", "NodeJS", "Babel", "Jquery", "ES6", "GIT", "GITHUB"]
         },
         {
            "id": 6,
            "name": "Tommy Boi",
            "img": "src/assets/images/tom_profile_pic.png",
            "desc": "Full Stack Developer",
            "github": "https://github.com/DrWho1369",
            "linkedin": "https://www.linkedin.com/in/thomas-baker-anutr-0b9758222/",
            "email": "tbaker.bhb@gmail.com",
            "skills": ["HTML", "CSS", "SASS", "JavaScript", "React", "Vue", "Nuxt", "NodeJS", "Babel", "Jquery", "ES6", "GIT", "GITHUB"]
         }
   ]
   return (
      <>
         <div className='row'>
            <h1>The Creators</h1>
         </div>
         
         <div className="column">
            <CreatorCard img={creators[0].img} name={creators[0].name} desc={creators[0].desc}  />
            <CreatorCard img={creators[1].img} name={creators[1].name} desc={creators[1].desc} />
            <CreatorCard img={creators[2].img} name={creators[2].name} desc={creators[2].desc} />
            <CreatorCard img={creators[3].img} name={creators[3].name} desc={creators[3].desc} />
            <CreatorCard img={creators[4].img} name={creators[4].name} desc={creators[4].desc} />
            <CreatorCard img={creators[5].img} name={creators[5].name} desc={creators[5].desc} />
         </div>
         {/* <RotatingSphere /> */}
      </>
   )
}
export default AboutContact;