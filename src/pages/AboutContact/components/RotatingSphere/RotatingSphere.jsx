import React, { useEffect} from 'react';
import './RotatingSphere.css';
import TagCloud from 'TagCloud';

const RotatingSphere = () => {
    // Animation settings for Text Cloud
    useEffect(() => {
      return () => {
        const container = ".tagcloud";
        const texts = [
          "HTML",
          "CSS",
          "SASS",
          "JavaScript",
          "React",
          "Vue",
          "Nuxt",
          "NodeJS",
          "Babel",
          "Jquery",
          "ES6",
          "GIT",
          "GITHUB",
        ];
  
        const options = {
          radius: 300,
          maxSpeed: "normal",
          initSpeed: "normal",
          keep: true,
        };
  
        TagCloud(container, texts, options);
      };
    }, []);
  
    return (
      <>
        <div className="text-shpere">
          {/* span tag className must be "tagcloud"  */}
          <span className="tagcloud"></span>
        </div>
      </>
    );
  };
  
  export default RotatingSphere;
  