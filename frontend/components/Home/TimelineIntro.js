import propTypes from "prop-types";

export const TimelineIntro = ({ intro }) => {
  return (
    <div className='TimelineIntro'>
      <span>{intro}</span>
      <br />
      <span>
        <p>About... </p><p>Join newsletter</p>
      </span>
      <style jsx>
        {`
          .TimelineIntro {
            height: auto;
            flex-grow: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 16px;
          }
          .TimelineIntro span {
            height: 107px;
            font-family: WorkSans;
            font-weight: normal;
            text-align: left;
            padding-left: 24px;
          }
        `}
      </style>
    </div>
  );
};

TimelineIntro.propTypes = {
  intro: propTypes.string,
};

TimelineIntro.defaultProps = {
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt massa arcu ultrices risus aliquam vitae.",
};
