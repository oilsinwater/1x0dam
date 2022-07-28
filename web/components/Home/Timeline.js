import PropTypes from "prop-types";
import { TimelineFilter } from "./TimelineFilter";
import { TimelineLogo } from "./TimelineLogo";
import { TimelineIntro } from "./TimelineIntro";
import { TimelineRow } from "./TimelineRow";

export const Timeline = (props) => {
  const reports = props.reports;

  return (
    <aside className='Timeline'>
      <TimelineLogo />
      <TimelineIntro />
      <TimelineFilter />
      {reports?.map((report) => {
        return (
          <div key={report?.slug}>
            <TimelineRow
              title={report?.title}
              category={report?.category}
              date={report?.date}
              slug={report?.slug}
            />
          </div>
        );
      })}
      <style jsx>{`
        .Timeline {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          padding: 0;
          background-color: #fafcff;
          overflow-y: scroll;
          overflow-x: hidden;
        }
      `}</style>
    </aside>
  );
};

Timeline.propTypes = {};
