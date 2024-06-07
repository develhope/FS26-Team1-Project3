import "../css/articleSectionCard.css";

export default function ArticleSectionCard({ img, title, desc }) {
  return (
    <div className="article-section-card">
      <div className="top">
        <img src={img} alt="article" className="article-img" />
        <p className="title">{title}</p>
      </div>
      <p className="desc">{desc}</p>
    </div>
  );
}
