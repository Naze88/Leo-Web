import { useState } from "react";
import { BadgeCheck, CalendarCheck, Camera, HeartHandshake, Images, MapPin, Sparkles } from "lucide-react";
import InfoCard from "../components/InfoCard.jsx";
import PageHero from "../components/PageHero.jsx";
import { heroImages } from "../data/heroImages.js";
import portraitPhoto from "../54126_0.jpg";
import championCollage from "../54127_0.jpg";
import showPhoto from "../54128_0.jpg";
import blueShowPhoto from "../54129_0.jpg";
import leoLogo from "../54130_0.jpg";
import lincolnCollage from "../54136_0.jpg";
import groupPlayPhoto from "../54157_0.jpg";

const albumPhotos = [
  {
    title: "Morning smile",
    tag: "Studio",
    image: portraitPhoto,
  },
  {
    title: "Champion wall",
    tag: "Show",
    image: showPhoto,
  },
  {
    title: "Garden crew",
    tag: "Outdoor",
    image: groupPlayPhoto,
  },
  {
    title: "Memory board",
    tag: "Collage",
    image: lincolnCollage,
  },
];

const boothFrames = [
  ["sunny", "Sunny Pop"],
  ["mint", "Mint Studio"],
  ["classic", "Classic Leo"],
  ["pink", "Blush Ribbon"],
];

const boothBackdrops = [
  ["cloud", "Cloud"],
  ["stage", "Show Stage"],
  ["garden", "Garden"],
];

const boothStickers = [
  ["spark", "Spark"],
  ["paws", "Paws"],
  ["crown", "Crown"],
];

const boothCaptions = [
  ["Champion Baby", "Warm yellow frame for cheerful champion portraits."],
  ["Best Short Legs", "A playful layout for Corgi profile shots."],
  ["Leo Corgi Star", "Premium profile styling for the house album."],
];

const sessions = [
  {
    title: "Mini Portrait",
    price: "฿15,000",
    copy: "15 minutes, 3 edited photos, one Corgi outfit prop.",
    image: portraitPhoto,
  },
  {
    title: "Champion Session",
    price: "฿29,000",
    copy: "Show-style portraits, ribbon moments, and polished winner shots.",
    image: blueShowPhoto,
  },
  {
    title: "Memory Collage",
    price: "฿20,000",
    copy: "A designed collage set using your favorite Corgi photos and captions.",
    image: championCollage,
  },
];

const boothPreviewImage = portraitPhoto;
const profileImage = portraitPhoto;

function Profile() {
  const [boothDesign, setBoothDesign] = useState({
    frame: "sunny",
    backdrop: "cloud",
    sticker: "spark",
    caption: "Champion Baby",
  });

  const updateBoothDesign = (type, value) => {
    setBoothDesign((design) => ({ ...design, [type]: value }));
  };

  const selectedCaption = boothCaptions.find(([label]) => label === boothDesign.caption);

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
          <h2>Build a booth look before the pose.</h2>
          <p>Choose a frame, backdrop, sticker, and caption. The preview updates instantly using Leo Corgi House photos from your local source folder.</p>
          <div className="booth-control-stack" aria-label="Photo booth design options">
            <BoothOptionGroup title="Frame" options={boothFrames} value={boothDesign.frame} onChange={(value) => updateBoothDesign("frame", value)} />
            <BoothOptionGroup title="Backdrop" options={boothBackdrops} value={boothDesign.backdrop} onChange={(value) => updateBoothDesign("backdrop", value)} />
            <BoothOptionGroup title="Sticker" options={boothStickers} value={boothDesign.sticker} onChange={(value) => updateBoothDesign("sticker", value)} />
            <BoothOptionGroup title="Caption" options={boothCaptions.map(([label]) => [label, label])} value={boothDesign.caption} onChange={(value) => updateBoothDesign("caption", value)} />
          </div>
        </div>
        <div className={`booth-preview frame-${boothDesign.frame} backdrop-${boothDesign.backdrop}`}>
          <div className="booth-toolbar">
            <span>
              <Camera />
              Leo Booth
            </span>
            <strong>{boothDesign.caption}</strong>
          </div>
          <div className="booth-stage">
            <img src={boothPreviewImage} alt="Corgi photo booth preview" />
            <span className={`booth-sticker sticker-${boothDesign.sticker}`} aria-hidden="true"></span>
            <img className="booth-logo" src={leoLogo} alt="Leo Corgi House logo" />
          </div>
          <div className="booth-caption">
            <Images />
            <span>{selectedCaption[1]}</span>
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
          {sessions.map((session) => (
            <article className="session-card" key={session.title}>
              <img src={session.image} alt={`${session.title} preview`} />
              <span>{session.price}</span>
              <h3>{session.title}</h3>
              <p>{session.copy}</p>
              <a href="#contact">Choose session</a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function BoothOptionGroup({ title, options, value, onChange }) {
  return (
    <div className="booth-option-group">
      <span>{title}</span>
      <div className="booth-controls">
        {options.map(([id, label]) => (
          <button className={value === id ? "active" : ""} type="button" onClick={() => onChange(id)} key={id}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Profile;
