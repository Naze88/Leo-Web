import { Bone, CalendarCheck, HeartPulse, PackageCheck, PackagePlus, Scissors, ShowerHead } from "lucide-react";
import InfoCard from "../components/InfoCard.jsx";
import PageHero from "../components/PageHero.jsx";
import { heroImages } from "../data/heroImages.js";

function About() {
  return (
    <>
      <PageHero
        image={heroImages.about}
        alt="Dog receiving gentle care"
        eyebrow="About our care"
        title="Services for happier Corgis"
        copy="Book grooming, ask for nutrition help, or prepare a starter kit before bringing a Corgi home."
      />
      <section className="care-band">
        <div className="care-content">
          <p className="eyebrow">Gentle care services</p>
          <h2>Grooming, nutrition help, and starter kits.</h2>
          <p>Our shop team can help choose Corgi food, fit harnesses, prepare starter bundles, and schedule a tidy-up before the weekend.</p>
        </div>
        <div className="service-list" aria-label="Corgi care services">
          <div>
            <Scissors />
            <span>Grooming</span>
          </div>
          <div>
            <HeartPulse />
            <span>Nutrition advice</span>
          </div>
          <div>
            <PackageCheck />
            <span>Starter bundles</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="detail-grid">
          <InfoCard icon={<ShowerHead />} title="Bath and brush" copy="Gentle washing, drying, brushing, and coat refreshes for regular care." />
          <InfoCard icon={<Bone />} title="Food matching" copy="Simple guidance for age, size, allergies, preferences, and feeding routines." />
          <InfoCard icon={<PackagePlus />} title="New Corgi setup" copy="Bowls, bedding, toys, treats, grooming basics, and first-week essentials." />
          <InfoCard icon={<CalendarCheck />} title="Easy booking" copy="Call or visit the store to schedule care services with our team." />
        </div>
      </section>
    </>
  );
}

export default About;
