import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
const Card = ({ article }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.image.url
      : process.env.REACT_APP_BACKEND_URL + article.image.url;
  return (
     
          <div id='about'>
              <div className='container'>
                  <div className='row'>
                      <div className='col-xs-12 col-md-6'>
                              <img src={imageUrl} alt={article.image.url} height="100" width="300" />
                      </div>
                  <div className='col-xs-12 col-md-6'>
                      <Link to={`/article/${article.slug}`} className="uk-link-reset">
                          <p id="title" className="uk-text-large">
                              {article.title}
                          </p>
                      </Link>
 <ReactMarkdown source={article.content} />

                      </div>
                  </div>
              </div>
              

      </div>
   
  );
};

export default Card;
