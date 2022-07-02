import React from "react";
import PropTypes from "prop-types";

export const PostHeaderDetails = ({ primary, authors, date }) => {
  return (
    <div className="post_header__details">
      <span className="header_label__authors">
        <caption>author(s)</caption>
      </span>
      <span className="header_text__authors">
        <a>{authors}</a>
      </span>
      <span className="header_label__date">
        <caption>date</caption>
      </span>
      <span className="header_text__date">{date}</span>
      <style jsx>
        {` 
          .post_header__details {
            position: relative:
            width: 400px;
            display: grid;
            grid:
              "label_authors label_date" auto
              "header_authors header_date" 32px
              / auto auto;
            gap: 0 24px;
            justify-content: start;
            align-content: start;
            grid-auto-flow: column;
            font-family: WorkSans;
            font-size: 17.66px;
          }
          .post_header__details caption {
            text-transform: uppercase;
          }
          .post_header__details span {
            text-transform: capitalize;
          }
          .header_label__authors {
            grid-area: label_authors;
          }
          .header_text__authors {
            grid-area: header_authors;
          }
          .header_label__date {
            grid-area: label_date;
          }
          .header_text__date {
            grid-area: header_date;
          }
          @media (min-width: 414px) {
            .post_header__details h1 {
                font-size: 32px;
            }
          }
          @media (min-width: 320px) {
            .post_header__details span {
              font-size: 14.1px;
            }
          }
        `}
      </style>
    </div>
  );
};

PostHeaderDetails.PpopTypes = {
  primary: PropTypes.bool,
  authors: PropTypes.string,
  date: PropTypes.string,
};

PostHeaderDetails.defaultProps = {
  primary: false,
  authors: "Firstname Lastname",
  date: "00 Jan 2022",
};
