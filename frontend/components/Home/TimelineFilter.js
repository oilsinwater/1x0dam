import { TimelineButton } from "./TimelineButton";
export const TimelineFilter = ({}) => {
  return (
    <div className='TimelineFilter'>
      <div className='FilterWrapper'>
        <div className='FilterHeader'>Index</div>
        <div className='FilterLabels'>
          <TimelineButton category='ALL' />
          <TimelineButton category='REPORT' />
        </div>
      </div>

      <style jsx>
        {`
          .FilterHeader {
            width: 229px;
            height: 41px;
            flex-grow: 0;
            font-size: 27.6px;
            font-weight: 500;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 41.4px;
            letter-spacing: normal;
            text-align: left;
          }
           .FilterLabels {
            width: 117px;
            height: 30px;
            flex-grow: 0;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
            gap: 16px;
            padding: 0 0 8px;
          }
          .FilterWrapper {
            width: 410px;
            height: 71px;
            flex-grow: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            padding: 0;
          }
          .TimelineFilter {
            width: 443px;
            height: auto;
            flex-grow: 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: left;
            padding: 16px;
          }
        `}
      </style>
    </div>
  );
};
