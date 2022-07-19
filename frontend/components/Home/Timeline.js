import PropTypes from "prop-types";
import { TimelineFilter } from "./TimelineFilter";
import { TimelineLogo } from "./TimelineLogo";
import { TimelineIntro } from "./TimelineIntro";
import { TimelineRow } from "./TimelineRow";

export const Timeline = ({}) => {
  return (
    <div className='Timeline'>
      <TimelineLogo/>
      <TimelineIntro/>
      <TimelineFilter/>
      <TimelineRow/>
      <style jsx>{`
        .Timeline {
          width: 443px;
          height: 1024px;
          flex-grow: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 0;
          background-color: #fafcff;
        }
      `}</style>
    </div>
  );
};

Timeline.propTypes = {};
