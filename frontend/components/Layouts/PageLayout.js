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
        <section className='Content'>{children}</section>
        <style jsx>{`
          .Main {
            scrollbar-width: thin;
            width: calc(100vw - 44px);
            height: 100vh;
          }
          .Content {
            grid-area: content;
            display: grid;
            width: calc(100vw - 44px);
            position: relative;
            margin-right: 44px;
            grid-template: 100% / calc((100vw / 3) - 44px) auto;
            grid-template-rows: 100%;
            grid-template-columns: calc(33.3333vw - 44px) auto;
            grid-template-areas: none;
            grid-gap: 0;
            height: 100vh;
          }
          .MenuBar {
            grid-area: menubar;
            position: fixed;
            top: 0;
            right: 0;
            width: 44px;
            height: 100vh;
            z-index: 99;
            overflow: hidden;
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
