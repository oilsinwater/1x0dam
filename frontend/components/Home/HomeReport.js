=import propTypes from "prop-types";

export const HomeReport = ({
  primary,
  title,
  excerpt,
  category,
  src,
  path,
}) => {
  return (
    <div className='HomeReport'>
      <a href={path} src={src}>
        <span className='note-text'>{category}</span>
        <div className='center'>
          <h1 className='title'>{title}</h1>
          <h3 className='excerpt'>{excerpt}</h3>
        </div>
      </a>
      <style jsx>{`
        .center {
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
        .title {
          font-family: WorkSans;
          font-size: 27.6px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 41.4px;
          letter-spacing: normal;
          text-align: center;
        }
        .excerpt {
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
  primary: false,
  title: "The Title",
  excerpt:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies volutpat faucibus sollicitudin in malesuada orci ac. Dui morbi dolor, fringilla bibendum molestie vitae. Et amet in facilisi sit cursus odio sed. Eu ac dui pharetra tincidunt ut.",
  category: "EXPERIMENTS",
  src: "https://via.placeholder.com/867.png",
  path: null,
};

HomeReport.propTypes = {
  primary: propTypes.bool,
  title: propTypes.string,
  exceprt: propTypes.string,
  src: propTypes.string,
  category: propTypes.string,
  path: propTypes.string,
};
