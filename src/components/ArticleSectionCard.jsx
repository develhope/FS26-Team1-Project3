import "../css/articleSectionCard.css";

export default function ArticleSectionCard({ img, title, desc, url }) {
  return (
    <div className="article-section-card">
      <div className="top">
        <img src={img} alt="article" className="article-img" />
        <a className="card-title" href="{url}">
          {title}
        </a>
      </div>
      <p className="desc">{desc}</p>
    </div>
  );
}
