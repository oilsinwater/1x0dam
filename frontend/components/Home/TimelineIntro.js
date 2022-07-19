import propTypes from "prop-types";

export const TimelineIntro = ({ primary }) => {
  return (
    <div className='TimelineIntro'>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt massa
        arcu ultrices risus aliquam vitae.
      </span>
      <br /> 
      <span>
        About... <br /> Join newsletter
      </span>
      <style jsx>
        {`
          .TimelineIntro {
            width: 443px;
            height: 175px;
            flex-grow: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 16px;
            padding: 0 16px;
          }
          .TimelineIntro span {
              width: 410px;
              height: 107px;
              flex-grow: 0;
              font-family: WorkSans;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 26.5px;
              letter-spacing: normal;
              text-align: left;
              color: var(--Black);
          }
        `}
      </style>
    </div>
  );
};

TimelineIntro.propTypes = {
  primary: propTypes.bool,
};

TimelineIntro.defaultProps = {
  primary: false,
};
