import propTypes from "prop-types";
import { Timeline } from "../components/Home/Timeline";
import { PageLayout } from "../components/Layouts/PageLayout";
import { HomeReport } from "../components/Home/HomeReport";

import { getAllReports } from "../lib/api";

const Home = ({ reports }) => {
  return (
    <PageLayout>
      <div className='HomeScreenWrapper'>
        <div className='TimelineWrapper'>
          <Timeline />
        </div>
        <div className='Highlights'>
          {reports?.map((report) => { 
            return (<HomeReport
              title={report?.title}
              category={report?.category}
              tagline={report?.tagline}
              slug={report?.slug}
            />);
          })}
        </div>
        <style jsx>{`
          .HomeScreenWrapper {
            display: grid;
            grid: "timelinewrapper hightlights" auto / auto auto;
            grid-auto-flow: row dense;
            justify-content: start;
          }
          .Highlights {
            grid-area: highlights,
            display: flex;
            flex-direction: column;
          }
          .TimelineWrapper {
            grid-area: timelinewrapper,
          }
        `}</style>
      </div>
    </PageLayout>
  );
};

export async function getStaticProps() {
  console.log("Calling getStaticProps");
  const reports = await getAllReports();
  return {
    props: {
      reports,
    },
  };
}

export default Home