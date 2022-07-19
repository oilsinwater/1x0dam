import propTypes from "prop-types";
import { ReportHeaderText } from "./ReportHeaderText";

export const ReportHeader = ({ primary }) => {
  return (
    <>
      <div className="ReportHeader">
        <ReportHeaderText />
        <div className="ReportHeaderVideo">
          <video
            autoPlay="autoPlay"
            muted="muted"
            disablePictureInPicture="disablePictureInPicture"
            loop="loop"
            playsInline="playsInline"
            src="../public/vid/title.mp4"
          ></video>
        </div>
        <style jsx>
          {`
            .ReportHeaderVideo > video {
              width: -moz-available;
              width: -webkit-available;
              object-fit: cover;
              min-height: 100vh;
              padding: 0px 24px;
            }
            .ReportHeaderVideo {
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
            .ReportHeader {
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
              overflow: hidden;
            }
            @media (max-width: 768px) {
              .ReportHeader {
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                min-height: auto;
                max-height: 300px;
                padding: 16px;
              }
              .ReportHeaderVideo > video {
                width: auto;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

ReportHeader.propTypes = {
  primary: propTypes.bool,
};

ReportHeader.defaultProps = {
  primary: true,
};
