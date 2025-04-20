import React from 'react';

const Card = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt="Card visual" />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-light">Read More</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;
