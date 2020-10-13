import React from "react";
import Hero from "../components/Hero.component";
import ContactForm from "../components/ContactForm.component";

const ContactMe = () => {
  return (
    <>
      <Hero content="Contact Me" backgroundSrc="/images/hero-contact-me.jpg" />
      <ContactForm />
    </>
  );
};

export default ContactMe;
