import { CalendarCheck, HeartPulse, MapPin, Scissors, ShoppingBasket, Sparkles } from "lucide-react";
import CategoryStrip from "../components/CategoryStrip.jsx";
import { heroImages } from "../data/heroImages.js";

const highlights = [
  ["6", "new Corgi picks this week"],
  ["24h", "pickup on local orders"],
  ["4.9", "care rating from regulars"],
];

const services = [
  [Scissors, "Fluffy coat reset", "Bath, brush, paw tidy, and gentle drying for thick Corgi coats."],
  [HeartPulse, "Food matching", "Simple nutrition picks for weight, age, allergies, and energy level."],
  [CalendarCheck, "Visit planning", "Book grooming or reserve pickup before your next walk day."],
];

function Home() {
  return (
    <>
      <section id="home" className="hero">
        <img className="hero-image" src={heroImages.home} alt="Happy dog resting beside Corgi supplies" />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="eyebrow">Premium food, toys, grooming, and daily Corgi care</p>
          <h1>Leo Corgi House</h1>
          <p className="hero-copy">
            Friendly supplies for Corgi dogs, curated for healthy coats, happy walks, and very serious zoomies.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#shop">
              <ShoppingBasket />
              Shop Corgi Favorites
            </a>
            <a className="button secondary" href="#contact">
              <MapPin />
              Find Store
            </a>
          </div>
          <div className="hero-stats" aria-label="Leo Corgi House highlights">
            {highlights.map(([value, label]) => (
              <div key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CategoryStrip />
      <section className="feature-band">
        <div className="section-heading">
          <p className="eyebrow">New at Leo</p>
          <h2>Built for Corgi routines.</h2>
        </div>
        <div className="feature-grid">
          {services.map(([Icon, title, copy]) => (
            <article className="feature-card" key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
          <article className="feature-card feature-card-strong">
            <Sparkles />
            <h3>Corgi Club perk</h3>
            <p>Bring your Corgi in for a fitting and get a custom food, harness, and coat-care checklist.</p>
            <a href="#contact">Book a visit</a>
          </article>
        </div>
      </section>
    </>
  );
}

export default Home;
