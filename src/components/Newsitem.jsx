import React from "react";
import './newsitem.css'


function Newsitem({ title, description, url, urlToImage }) {
  return (
      <div>
          <div>
              
          </div>
    <div className="news-item">
      <img className='news-img' src={urlToImage} alt="New Image" />
      <h3>
        <a href={url}>{title}</a>
      </h3>
      <p>{description}</p>
  
    </div>
    </div>
  );
}

export default Newsitem;
