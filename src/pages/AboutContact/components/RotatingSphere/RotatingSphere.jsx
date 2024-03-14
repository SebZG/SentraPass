import React, { useEffect} from 'react';
import { useState } from 'react';
import './RotatingSphere.css';
import TagCloud from 'TagCloud';
import AboutContact from '../../AboutContact';

const RotatingSphere = (props) => {
    // const [hideSkills, setHideSkills] = useState(false);

    const handleClick = () => {
      props.setShowSkills(props.id); 
    }

    // if (hideSkills) {
    //   return <AboutContact />
    // }

    useEffect(() => {
      return () => {
        const container = ".tagcloud";
        const texts = props.skills;
  
        const options = {
          radius: 150,
          maxSpeed: "normal",
          initSpeed: "normal",
          keep: true,
        };
  
        TagCloud(container, texts, options);
      };
    }, []);
  
    return (
      <>
        <h3 class="hide-skills" onClick={handleClick}>HIDE SKILLS</h3>
        <div className="text-sphere">
          <span className="tagcloud"></span>
        </div>
        
        
      </>
    );
  };
  
  export default RotatingSphere;
  