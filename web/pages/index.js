import Head from "next/head";
import propTypes from "prop-types";

import { MenuBar } from "../components/MenuBar/MenuBar";
import { Timeline } from "../components/Home/Timeline";
import { HomeReport } from "../components/Home/HomeReport";

import { getAllReports } from "../lib/api";

export async function getStaticProps() {
  console.log("Calling getStaticProps");
  const reports = await getAllReports();
  return {
    props: {
      reports,
    },
  };
}

export const Home = ({ reports, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className='Layout'>
        <MenuBar />
        <main className='Main'>
          <Timeline reports={reports} />
          <section className='Content'>
            <div className='Highlights'>
            {JSON.stringify(reports)}
              {reports?.map((report) => {
                return (
                  <div key={report?.slug}>
                  <HomeReport
                    title={report?.title}
                    coverImage={report?.coverImage}
                    category={report?.category}
                    tagline={report?.tagline}
                    slug={report?.slug}
                  />
                  </div>
                );
              })}
            </div>
          </section>
        </main>
        <style jsx>{`
          .Content {
            display: flex;
            flex-direction: column;
            overflow-y: scroll;
          }
          .Layout {
            scrollbar-width: thin;
            width: calc(100vw - 44px);
            height: 100vh;
          }
          .Main {
            grid-area: content;
            display: grid;
            width: calc(100vw - 44px);
            position: relative;
            margin-right: 44px;
            grid-template: 100% / calc((100vw / 3) - 44px) auto;
            grid-gap: 0;
            height: 100vh;
          }
          .Highlights {
            grid-template-columns: repeat(
              auto-fill,
              minmax(calc((100vw / 3) - 44px), 1fr)
            );
            grid-auto-rows: minmax(calc(33vw - 44px), 40vh);
            grid-gap: 0;
            height: 100vh;
          }
        `}</style>
      </div>
    </div>
  );
};

Home.propTypes = {
  title: propTypes.string.isRequired,
};

Home.defaultProps = {
  title: "The Title",
};

export default Home;
