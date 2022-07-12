import React from "react";
import PropTypes from "prop-types";
import back from "../public/icons/back.svg";
import Image from "next/image";

export const BackButton = ({ primary }) => {
  return (
    <button className='BackButton'>
      <Image src={back} width={43} height={43} />
      <style jsx>{`
        .BackButton {
          padding: 0px;
          height: 44px;
          max-height: 44px;
          width: 44px;
          max-width: 44px;
          flex-grow: 0;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          position: absolute;
          margin-top: auto;
        }
      `}</style>
    </button>
  );
};

BackButton.PropTypes = {
  primary: PropTypes.bool,
};

BackButton.defaultProps = {
  primary: false,
};