import React from "react";
import propTypes from "prop-types";
import back from "../public/icons/back.svg";
import Image from "next/image";

export const BackButton = ({ primary }) => {
  return (
    <button className='BackButton'>
      <span>
        <Image src={back} width={43} height={43} />
      </span>
      <style jsx>{`
        .BackButton {
          height: 44px;
          max-height: 44px;
          width: 43px;
          max-width: 44px;
          flex-grow: 0;
          display: flex;
          flex-direction: row;
          position: fixed;
          bottom: 0;
          right: 0;
          border-top: 1px solid;
        }
        .BackButton span img svg{
          fill: #f0f2f5;
        }
      `}</style>
    </button>
  );
};

BackButton.propTypes = {
  primary: propTypes.bool,
};

BackButton.defaultProps = {
  primary: false,
};
