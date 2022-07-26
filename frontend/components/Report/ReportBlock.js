import propTypes from "prop-types";

export const ReportBlock = ({ primary, content }) => {
  return (
    <div className='ReportBlock'>
      <p>{content}</p>
      <style jsx>{`
        .ReportBlock {
          height: auto;
          width: 70ch;
          max-width: 658px;
          padding: 0;
        }
        @media (max-width: 321px) {
          .ReportBlock p {
            font-size: 14px;
          }
          .ReportBlock {
            min-width: 24ch;
          }
        }
        @media (max-width: 767px) {
          .ReportBlock {
            width: 75vw;
          }
        }
      `}</style>
    </div>
  );
};

ReportBlock.propTypes = {
  primary: propTypes.bool,
  content: propTypes.any,
};

ReportBlock.defaultProps = {
  primary: false,
  content: "Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Quis risus sed vulputate odio ut enim blandit volutpat. Lacus sed turpis tincidunt id aliquet risus feugiat. Tincidunt id aliquet risus feugiat in. Lectus urna duis convallis convallis. Morbi tempus iaculis urna id volutpat lacus laoreet. In fermentum posuere urna nec tincidunt praesent. Urna et pharetra pharetra massa massa ultricies mi. Id faucibus nisl tincidunt eget nullam non nisi est sit. Amet venenatis urna cursus eget. A diam sollicitudin tempor id. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Parturient montes nascetur ridiculus mus mauris vitae ultricies. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl.",
};
