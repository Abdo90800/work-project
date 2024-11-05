import MapComponent from "./MapComponent";
import ContactHead from "../component/ContactHead";
import ContactIcons from "../component/ContactIcons";
const ContactUs = () => {
  return (
    <section className="contact-us ">
      <ContactHead />
      <ContactIcons />
      <MapComponent />
    </section>
  );
};

export default ContactUs;
