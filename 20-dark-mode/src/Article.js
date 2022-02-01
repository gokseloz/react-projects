import React from "react";
import moment from "moment";

const Article = ({ title, date, length, snippet }) => {
  moment.locale("de");
  const formattedDate = moment(date).format("dddd Do YYYY");

  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{formattedDate}</span>
        <span>{length} min read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
