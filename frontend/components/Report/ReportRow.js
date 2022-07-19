import propTypes from "prop-types";
import { ReportBlock } from "./ReportBlock";
import { NoteText } from "./NoteText";

export const ReportRow = ({ primary }) => {
  return (
    <>
      <div className="ReportRow">
        <ReportBlock />
        <NoteText />
        <style jsx>
            {`
            .ReportRow {
                display: flex;
                flex-direction: row;
                gap: 119px;
                margin-top: 24px;
                }

                @media (max-width: 414px) {
                  .ReportRow {
                    gap: 64px;
                  }
                }
            `}
        </style>
      </div>
    </>
  );
};

ReportRow.propTypes = {
  primary: propTypes.bool,
};

ReportRow.defaultProps = {
  primary: false,
};
