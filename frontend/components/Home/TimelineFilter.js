import { TimelineButton } from "./TimelineButton";
export const TimelineFilter = ({}) => {
  return (
    <div className='TimelineFilter'>
      <div className='FilterWrapper'>
        <div className='FilterHeader'>Index</div>
        <div className='Labels'>
          <TimelineButton category='ALL' />
        </div>
      </div>
      <style jsx>
        {`
          .FilterHeader {
            max-width: 443px;
            height: 41px;
            font-size: 27.6px;
            font-weight: 500;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: 41.4px;
            letter-spacing: normal;
            text-align: left;
          }
           .Labels {
            width: 410px;
            height: auto;
            display: flex;
            flex-direction: row;
            gap: 8px;
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
            width: 410px;
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
