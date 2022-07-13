import React from "react";
import propTypes from "prop-types";
import Image from "next/image";
import heart from "../public/icons/heart.svg";
import subscribe from "../public/icons/subscribe.svg";
import contact from "../public/icons/contact.svg";

export const UtilityButtons = ({ primary }) => {
  return (
    <div className='UtilityButtons'>
      <button>
        <Image src={subscribe} width={43} height={43} />
      </button>
      <button>
        <Image src={contact} width={43} height={43} />
      </button>
      <button>
        <Image src={heart} width={43} height={43} />
      </button>
      <style jsx>{`
        .UtilityButtons {
          width: 44px;
          max-width: 44px;
          max-height: 129px;
          height: 129px;
          flex-grow: ;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items:center;
          border-top: 1px solid;
          padding: 0px;
          margin: 0px;
        }
      `}</style>
    </div>
  );
};

UtilityButtons.propTypes = {
  propTypes: propTypes.bool,
};

UtilityButtons.defaultProps = {
  primary: false,
};
