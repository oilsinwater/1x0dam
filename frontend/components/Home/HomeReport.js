

import propTypes from "prop-types";

export const HomeReport = ({
  title,
  tagline,
  category,
  slug,
}) => {
  return (
    <div className='HomeReport'>
      <a href={slug}>
        <span className='Category'>{category}</span>
        <div className='Center'>
          <h1 className='Title'>{title}</h1>
          <h3 className='Tagline'>{tagline}</h3>
        </div>
      </a>
      <style jsx>{`
        .Category {
          font-size: 10.4px;
          text-decoration: uppercase;
        }
        .Center {
          height: 862px;
          align-self: stretch;
          flex-grow: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0;
          padding: 0;
        }
        .HomeReport {
          width: 867px;
          height: 917px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: stretch;
          padding: 16px 32px;
          background-color: #f2f1f1;
        }
        .Title {
          font-family: WorkSans;
          font-size: 27.6px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 41.4px;
          letter-spacing: normal;
          text-align: center;
        }
        .Tagline {
          font-family: WorkSans;
          position: center;
          font-size: 17.7px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 26.5px;
          letter-spacing: normal;
          text-align: center;
          padding: 0px 88px;
        }
      `}</style>
    </div>
  );
};

HomeReport.defaultProps = {
  title: "The Title",
  tagline:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies volutpat faucibus sollicitudin in malesuada orci ac. Dui morbi dolor, fringilla bibendum molestie vitae. Et amet in facilisi sit cursus odio sed. Eu ac dui pharetra tincidunt ut.",
  category: "REPORT",
  mainImage: "https://via.placeholder.com/867.png",
  slug: null,
};

HomeReport.propTypes = {
  title: propTypes.string,
  tagline: propTypes.string,
  category: propTypes.string,
  slug: propTypes.string,
};
