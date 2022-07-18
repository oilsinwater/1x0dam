import { ReportHeader } from "./ReportHeader";
import { ReportRow } from "./ReportRow";
import { MenuBarFull } from "../MenuBar/MenuBar";
import propTypes from "prop-types";

export const ReportScreen = ({ primary, title }) => {
  return (
    <>
      <main className='Main'>
        <div className='Menu'>
          <MenuBarFull />
        </div>
        <div className='Content'>
          <ReportHeader />
          <br />
          <ReportRow />
          <ReportRow />
        </div>
        <style jsx>
          {`
            .Main {
              position: relative;
              height: 100vh;
              width: calc(100vw - 44px);
              overflow-x: hidden;
            }
            .Menu {
              grid-area: Navigation;
              position: fixed;
              top: 0px;
              right: 0px;
              z-index: 100;
              padding: 0px;
              max-width: 44px;
              height: 100vh;
              background-color: white;
              border-left: 1px solid black;
            }
            .Content {
              grid-area: Main;
              display: flex;
              flex-direction: column;
              margin: 0px 24px;
            }
          `}
        </style>
      </main>
    </>
  );
};


ReportScreen.propTypes = {
  primary: propTypes.bool,
}
ReportScreen.defaultProps = {
  primary: false,
}