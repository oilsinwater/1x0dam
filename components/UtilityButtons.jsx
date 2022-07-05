import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import heart from "../public/icons/heart.svg";
import subscribe from "../public/icons/subscribe.svg";
import contact from "../public/icons/contact.svg";

export const UtilityButtons = ({ primary }) => {
  return (
    <div className='UtilityButtons'>
      {" "}
      <button>
        <Image alt='Subscrib icon' src={subscribe} width={23} height={23} />
      </button>
      <button>
        <Image alt='Contact icon' src={contact} width={23} height={23} />
      </button>
      <button>
        <Image alt='Support icon' src={heart} width={23} height={23} />
      </button>
      <style jsx>{`
        .UtilityButtons {
          width: 43px;
          height: 129px;
          flex-grow: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

UtilityButtons.PropTypes = {
  PropTypes: PropTypes.bool,
};

UtilityButtons.defaultProps = {
  primary: false,
};
