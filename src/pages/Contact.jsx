import ContactInfo from "../components/ContactInfo";
import Contactform from "../components/Contactform";
import angkor from '../assets/angkorwat.png';
const Contact = () => {
  return (
    <div className="relative bg-cover bg-center py-40 flex items-center justify-center px-6"
              style={{ backgroundImage: `url(${angkor})` }}
              id="contact">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8">
        <ContactInfo />
        <Contactform />
      </div>
    </div>
  );
};

export default Contact;
