import MapComponent from "./MapComponent";
import ContactHead from "../component/ContactHead";
import ContactIcons from "../component/ContactIcons";
import ContactFrame from "../component/ContactFrame";
const ContactUs = () => {
  return (
    <section className="contact-us ">
      <ContactFrame/>
      <ContactHead />
      <ContactIcons />
      <MapComponent />
    </section>
  );
};

export default ContactUs;
