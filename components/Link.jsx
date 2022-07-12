import React from "react";
import PropTypes from "prop-types";

export const Link = ({ primary, title }) => {
  return (
    <div>
      <a className='Link'>{title}</a>
      <style jsx>{`
        .Link {
          margin: 16px 16px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          width: 68px;
          height: 44px;
          flex: auto;
          flex-grow: 0;
          transform: rotate(-270deg);
          font-family: WorkSans;
          font-size: 10.4px;
          font-weight: 300;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.31px;
          text-align: left;
          color: #040404;
        }
      `}</style>
    </div>
  );
};

Link.PropTypes = {
  primary: PropTypes.bool,
  title: PropTypes.string,
};

Link.defaultProps = {
  primary: false,
  title: "The Pigeon Flies",
};
