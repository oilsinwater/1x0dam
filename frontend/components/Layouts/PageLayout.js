import Head from "next/head";
import { MenuBar } from "../MenuBar/MenuBar";
import { HomeReport } from "../Home/HomeReport";
import propTypes from "prop-types";

export const PageLayout = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main className='Main'>
        <nav className='MenuBar'>
          <MenuBar />
        </nav>
        <div className='Content'>{children}</div>
        <style jsx>{`
          .Main {
            width: 100vw;
            height: 100vh;
            display: grid;
            grid:
              "content menubar" 1fr
              / auto 44px;
            grid-auto-flow: row dense;
            justify-content: start;
          }
          .MenuBar {
            grid-area: menubar;
            position: fixed;
            top: 0;
            right: 0;
            width: 44px;
            height: 100vh;
            z-index: 99;
          }
          .Content {
            grid-area: content;
            width: calc(100vw - 44px);
            position: relative;
            margin-right: 44px;
          }
        `}</style>
      </main>
    </div>
  );
};

PageLayout.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.element.isRequired,
};

PageLayout.defaultProps = {
  title: "The Title",
  children: <HomeReport />,
};
