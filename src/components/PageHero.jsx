function PageHero({ image, alt, eyebrow, title, copy }) {
  return (
    <section className="page-hero">
      <img className="hero-image" src={image} alt={alt} />
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-copy">{copy}</p>
      </div>
    </section>
  );
}

export default PageHero;
