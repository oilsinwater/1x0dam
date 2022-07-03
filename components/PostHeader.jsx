import React from "react";
import PropTypes from "prop-types";
import { PostHeaderText } from "./PostHeaderText";

export const PostHeader = ({ primary }) => {
  return (
    <>
      <div className="post_header">
        <PostHeaderText />
        <div className="post_header__vid">
          <video
            autoplay="autoplay"
            muted="muted"
            disablepictureinpicture="disablePictureInPicture"
            loop="loop"
            playsinline="playsInline"
            src="../public/vid/title.mp4"
          ></video>
        </div>
        <style jsx>
          {`
            .post_header__vid > video {
              width: -moz-available;
              width: -webkit-available;
              object-fit: cover;
              min-height: 100vh;
              padding: 0px 24px;
            }
            .post_header__vid {
              box-sizing: border-box;
              mix-blend-mode: multiply;
              opacity: 1;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: calc(0% + 1rem);
              overflow: hidden;
              padding: 0;
              z-index: -1;
            }
            .post_header {
              diplay: flex;
              height: 100vh;
              max-height: 60rem;
              min-height: 36rem;
              flex-grow: 0;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              align-items: flex-start;
              gap: 0px;
              padding: 0px 24px;
              background-color: #a0a0a0;
            }
            @media (max-width: 768px) {
              .post_header {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                min-height: auto;
                max-height: 300px;
                padding: 16px;
              }
              .post_header__vid > video {
                width: auto;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

PostHeader.PropTypes = {
  primary: PropTypes.bool,
};

PostHeader.defaultProps = {
  primary: true,
};
