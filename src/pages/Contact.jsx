import { Phone, Send } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import { heroImages } from "../data/heroImages.js";

function Contact() {
  return (
    <>
      <PageHero
        image={heroImages.contact}
        alt="Dog shop shelf with colorful supplies"
        eyebrow="Visit today"
        title="Contact Leo Corgi House"
        copy="Open daily for Corgis and their people at 123 Cozy Lane, Happy Town."
      />
      <section className="visit-section">
        <div className="visit-details">
          <p className="eyebrow">Store details</p>
          <h2>We are ready to help.</h2>
          <p>123 Cozy Lane, Happy Town</p>
          <p>Mon-Sat 9:00-20:00 &middot; Sun 10:00-18:00</p>
          <a className="button primary" href="tel:+15550190888">
            <Phone />
            Call Shop
          </a>
        </div>

        <form className="contact-form" action="mailto:hello@leocorgihouse.example" method="post" encType="text/plain">
          <label>
            Name
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" required></textarea>
          </label>
          <button className="button primary" type="submit">
            <Send />
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}

export default Contact;
