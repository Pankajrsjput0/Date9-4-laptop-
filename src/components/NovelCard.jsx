import React from 'react';
import { Link } from 'react-router-dom';

function NovelCard({ novel }) {
  const DefaultCover = () => (
    <div className="default-cover">
      <h3>{novel.title}</h3>
      <p>By {novel.author}</p>
    </div>
  );

  return (
    <div className="novel-card">
      {novel.NovelCoverpage ? (
        <img src={novel.NovelCoverpage} alt={novel.title} className="novel-cover" />
      ) : (
        <DefaultCover />
      )}
      <div className="novel-info">
        <h3>{novel.title}</h3>
        <p>By {novel.author}</p>
        <p>Genre: {novel.genre}</p>
        <Link to={`/novel/${novel.id}`} className="read-more">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default NovelCard;