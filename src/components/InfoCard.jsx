function InfoCard({ icon, title, copy }) {
  return (
    <article className="info-card">
      {icon}
      <h3>{title}</h3>
      <p>{copy}</p>
    </article>
  );
}

export default InfoCard;
