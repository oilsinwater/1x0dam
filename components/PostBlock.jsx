import React from "react";
import propTypes from "prop-types";

export const PostBlock = ({ primary, text }) => {
  return (
    <div className='post_block'>
      <p>{text}</p>
      <style jsx>{`
        .post_block {
          height: auto;
          width: 70ch;
          max-width: 658px;
          margin: 0 119 0 0;
          padding: 0;
        }
        @media (max-width: 767px) {
          .post_block {
            width: 24ch;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
};

PostBlock.propTypes = {
  primary: propTypes.bool,
  text: propTypes.string,
};

PostBlock.defaultProps = {
  primary: false,
  text: "Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Quis risus sed vulputate odio ut enim blandit volutpat. Lacus sed turpis tincidunt id aliquet risus feugiat. Tincidunt id aliquet risus feugiat in. Lectus urna duis convallis convallis. Morbi tempus iaculis urna id volutpat lacus laoreet. In fermentum posuere urna nec tincidunt praesent. Urna et pharetra pharetra massa massa ultricies mi. Id faucibus nisl tincidunt eget nullam non nisi est sit. Amet venenatis urna cursus eget. A diam sollicitudin tempor id. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Parturient montes nascetur ridiculus mus mauris vitae ultricies. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl.",
};
