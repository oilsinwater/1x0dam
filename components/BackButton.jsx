import React from "react";
import PropTypes from "prop-types";
import back from "../public/icons/back.svg";
import Image from "next/image";

export const BackButton = ({ primary }) => {
  return (
    <div className='BackButton'>
      <Image src={back} width={48} height={48} />
      <span className='BackButtonText'>Back</span>
      <style jsx>{`
        .BackButton {
          flex-grow: 0;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          padding: 0;
          height: 43px;
          width: auto;
        }
        .BackButtonText {
            visibility: hidden;
        }
        .BackButtonText:hover {
            visibility: visible;
        }
        .BackButtonText {
          font-size: 17.7px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 26.5px;
          letter-spacing: normal;
          text-align: center;
        }
      `}</style>
    </div>
  );
};
