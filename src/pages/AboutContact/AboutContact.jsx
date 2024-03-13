import './AboutContact.css'
import Carosel from './components/Carosel/Carosel';
import ContactUsForm from './components/ContactUsForm/ContactUsForm';
import CreatorCard from './components/CreatorCard/CreatorCard';
import RotatingSphere from './components/RotatingSphere/RotatingSphere';

const AboutContact = () => {
   return (
      <>
         <h1>Meet the Creators</h1>
         <Carosel />
         <RotatingSphere />
      </>
   )
}
export default AboutContact;