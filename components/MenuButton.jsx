import React from "react";
import propTypes from "prop-types";
import Image from "next/image";
import menuicon from '../public/icons/menu.svg';

export const MenuButton = ({ primary }) => {
  return (
    <button className='MenuButton'>
      <span className='MenuIcon'>
        <Image alt="Menu icon"
          src={menuicon}
          width={43}
          height={20}
        />
      </span>
      <span className='MenuButtonText'>Menu</span>
      <style jsx>
        {` .MenuButton span {
          margin-top: 4px;
        }
          .MenuButton {
            width: 43px;
            height: 120px;
            flex-grow: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            gap: 32px;
          }
          .MenuButtonText {
            width: 71px;
            height: 19px;
            padding: 0px;
            margin: 25px 05px 0px 5px;
            transform: rotate(-270deg);
            font-family: WorkSans;
            font-size: 21.44px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 33.1px;
            letter-spacing: normal;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-transform: uppercase;
          }
        `}
      </style>
    </button>
  );
};

MenuButton.propTypes = {
  primary: propTypes.bool,
};
MenuButton.defaultProps = {
  primary: false,
};
