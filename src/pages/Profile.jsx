import { useState } from "react";
import { BadgeCheck, CalendarCheck, Camera, HeartHandshake, Images, MapPin, Sparkles } from "lucide-react";
import InfoCard from "../components/InfoCard.jsx";
import PageHero from "../components/PageHero.jsx";
import { heroImages } from "../data/heroImages.js";

const albumPhotos = [
  {
    title: "Morning smile",
    tag: "Studio",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Walk day",
    tag: "Outdoor",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Fresh coat",
    tag: "Grooming",
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Treat focus",
    tag: "Portrait",
    image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=900&q=80",
  },
];

const boothFrames = [
  ["sunny", "Sunny Pop", "Warm yellow frame for cheerful portraits."],
  ["mint", "Mint Studio", "Soft green frame for clean profile shots."],
  ["classic", "Classic Leo", "Deep frame for premium Corgi portraits."],
];

const sessions = [
  ["Mini Portrait", "$29", "15 minutes, 3 edited photos, one Corgi outfit prop."],
  ["Family Corgi", "$59", "35 minutes, 8 edited photos, family and solo poses."],
  ["Birthday Set", "$79", "45 minutes, themed backdrop, treats, and 12 edited photos."],
];

const boothPreviewImage = "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1000&q=80";
const profileImage = "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=80";

function Profile() {
  const [activeFrame, setActiveFrame] = useState("sunny");
  const selectedFrame = boothFrames.find(([id]) => id === activeFrame);

  return (
    <>
      <PageHero
        image={heroImages.profile}
        alt="Small dog looking at the camera"
        eyebrow="Our profile"
        title="Corgi care with heart"
        copy="Leo Corgi House is a neighborhood store focused on practical advice, gentle care, and supplies that make daily Corgi life easier."
      />
      <section className="split-section">
        <div className="split-copy">
          <p className="eyebrow">What we do</p>
          <h2>A friendly shop for everyday Corgi routines.</h2>
          <p>We help Corgi owners choose food, toys, grooming products, and starter bundles with simple guidance instead of confusing shelves.</p>
          <p>Our goal is to make every visit useful, calm, and welcoming for Corgis and their people.</p>
        </div>
        <img
          src={profileImage}
          alt="Happy dog portrait"
        />
      </section>
      <section className="section">
        <div className="detail-grid">
          <InfoCard icon={<BadgeCheck />} title="Curated supplies" copy="Products are selected for quality, comfort, and everyday usefulness." />
          <InfoCard icon={<HeartHandshake />} title="Helpful guidance" copy="Our team gives clear suggestions for Corgi food, grooming, and home setups." />
          <InfoCard icon={<Sparkles />} title="Gentle care" copy="Grooming and care services are designed to keep Corgis comfortable." />
          <InfoCard icon={<MapPin />} title="Local store" copy="Visit us in Happy Town for supplies, advice, and friendly service." />
        </div>
      </section>

      <section className="photo-album-section">
        <div className="section-heading">
          <p className="eyebrow">Photo album</p>
          <h2>Corgi moments from the house.</h2>
        </div>
        <div className="album-grid">
          {albumPhotos.map((photo) => (
            <article className="album-card" key={photo.title}>
              <img src={photo.image} alt={`${photo.title} Corgi photo`} />
              <div>
                <span>{photo.tag}</span>
                <h3>{photo.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="photo-booth-section">
        <div className="booth-copy">
          <p className="eyebrow">Photo booth</p>
          <h2>Pick a frame before the pose.</h2>
          <p>Choose a booth look for your Corgi profile shot. The preview updates instantly so you can pick a mood before booking.</p>
          <div className="booth-controls" aria-label="Photo booth frame options">
            {boothFrames.map(([id, label]) => (
              <button className={activeFrame === id ? "active" : ""} type="button" onClick={() => setActiveFrame(id)} key={id}>
                {label}
              </button>
            ))}
          </div>
        </div>
        <div className={`booth-preview ${activeFrame}`}>
          <div className="booth-toolbar">
            <span>
              <Camera />
              Leo Booth
            </span>
            <strong>{selectedFrame[1]}</strong>
          </div>
          <img src={boothPreviewImage} alt="Corgi photo booth preview" />
          <div className="booth-caption">
            <Images />
            <span>{selectedFrame[2]}</span>
          </div>
        </div>
      </section>

      <section className="photo-session-section">
        <div className="section-heading session-heading">
          <div>
            <p className="eyebrow">Photo session</p>
            <h2>Book a Corgi shoot.</h2>
          </div>
          <a className="button primary" href="#contact">
            <CalendarCheck />
            Reserve a slot
          </a>
        </div>
        <div className="session-grid">
          {sessions.map(([title, price, copy]) => (
            <article className="session-card" key={title}>
              <span>{price}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <a href="#contact">Choose session</a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Profile;
