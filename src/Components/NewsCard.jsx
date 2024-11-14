import React, { useContext } from "react";
import ThemeContext from "../Provider/Theme/ThemeContext";

const NewsCard = ({news}) => {
  const { dark } = useContext(ThemeContext);

  return (
    <div className={dark ? "card mb-3 text-light bg-dark" : "card mb-3 "}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            id="image"
            src={news.urlToImage}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div
          className={dark ? "col-md-8 bg-dark text-light" : "col-md-8 bg-light"}
        >
          <div className="card-body">
            <h5 className="card-title">{news.title}</h5>
            <p className="card-text">{news.description}</p>

            <p id="parah" className="card-text">
              <small className="text-secondary">
                Date:{new Date (news.publishedAt).toDateString('en-In')}
              </small>
            </p>

            <p id="parah2" className="card-text">
              <small className="text-secondary ">Source:{news.author}</small>
            </p>

            <a id="read" 
              href={news.url}
              target="_blank"
              className={
                dark
                  ? "btn btn-sm btn-outline-info rounded-0 float-end mx-3 "
                  : "btn btn-sm btn-outline-info rounded-0 float-end mx-3 "
              }
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
