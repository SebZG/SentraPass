import { useState, useEffect } from "react";
import CreatorCard from "../CreatorCard/CreatorCard";
import "./ContactCardFlipper.css";
import TypewriterEffect from "../TypewriterHeader/TypewriterHeader";
import SnakeGame from "../SnakeGame/SnakeGame";
const creatorsdata = [
  {
    id: 1,
    showSkills: false,
    name: "Seb",
    img: "src/assets/images/seb_profile_pic.png",
    desc: "Back End Bandit & Server Sorcerer",
    github: "https://github.com/SebZG",
    linkedin: "https://www.linkedin.com/in/sebastian-z-g/",
    email: "pCZ8x@example.com",
    skills: [
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
    ],
  },
  {
    id: 2,
    showSkills: false,
    name: "Ana",
    img: "src/assets/images/ana_profile_pic.png",
    desc: "React Sorceress & JavaScript Jester",
    github: "https://github.com/anadomuta",
    linkedin: "https://www.linkedin.com/in/ana-domuta/",
    email: "pCZ8x@example.com",
    skills: [
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
    ],
  },
  {
    id: 3,
    showSkills: false,
    name: "Harry",
    img: "src/assets/images/harry_profile_pic.png",
    desc: "Script Juggler & Exception Exterminator",
    github: "https://github.com/hpro97",
    linkedin: "https://www.linkedin.com/in/harryprobert/",
    email: "pCZ8x@example.com",
    skills: [
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
    ],
  },
  {
    id: 4,
    showSkills: false,
    name: "Aaron",
    img: "src/assets/images/aaron_profile_pic.png",
    desc: "Array Avenger & Coding Chameleon",
    github: "https://github.com/aaron1490",
    linkedin:
      "https://www.linkedin.com/in/aaron-armstrong-%E8%89%BE%E4%BF%8A%E6%A8%82-80986ba5/",
    email: "pCZ8x@example.com",
    skills: [
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
    ],
  },
  {
    id: 5,
    showSkills: false,
    name: "Conor",
    img: "src/assets/images/conner_profile_pic.png",
    desc: "Bootstrap Buccaneer & Script Scribe",
    github: "https://github.com/Crar96",
    linkedin: "https://www.linkedin.com/in/conor-grogan-a09a7a216/",
    email: "pCZ8x@example.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "React",
      "Jquery",
      "GIT",
      "GITHUB",
    ],
  },
  {
    id: 6,
    showSkills: false,
    name: "Tom",
    img: "src/assets/images/tom_profile_pic.png",
    desc: "CSS Magician & SASS Sauron",
    github: "https://github.com/DrWho1369",
    linkedin: "https://www.linkedin.com/in/thomas-baker-anutr-0b9758222/",
    email: "tbaker.bhb@gmail.com",
    skills: [
      "Python",
      "Django",
      "HTML",
      "CSS",
      "SASS",
      "JavaScript",
      "React",
      "NodeJS",
      "Jquery",
      "ES6",
      "GIT",
      "GITHUB",
    ],
  },
];

const ContactCardFlipper = () => {
  const [displayedCreatorId, setDisplayedCreatorId] = useState(null);
  const [skillToggleCount, setSkillToggleCount] = useState(0);
  const anySkillsShown = displayedCreatorId !== null;
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (skillToggleCount > 2) {
      const id = setTimeout(() => {
        setSkillToggleCount(0);
      }, 2000);

      setTimeoutId(id);
    }

    return () => clearTimeout(timeoutId);
  }, [skillToggleCount]);

  const toggleShowSkills = (id) => {
    if (!anySkillsShown) {
      setDisplayedCreatorId((prevState) => (prevState === id ? null : id));
      setSkillToggleCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <div id="about-contact">
      <div className="row">
        <TypewriterEffect />
      </div>
      <div className="row">
        {creatorsdata.map((creator) => (
          <div key={creator.id} className="col-md-6 col-lg-4">
            <CreatorCard
              id={creator.id}
              setShowSkills={toggleShowSkills}
              setDisplayedCreatorId={setDisplayedCreatorId}
              showSkills={displayedCreatorId === creator.id}
              disableViewSkills={anySkillsShown}
              img={creator.img}
              name={creator.name}
              desc={creator.desc}
              github={creator.github}
              linkedin={creator.linkedin}
              email={creator.email}
              skills={creator.skills}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCardFlipper;
