import Head from "next/head";
import propTypes from "prop-types";

import { MenuBarFull } from "../../components/MenuBar/MenuBar";
import { ReportHeader } from "../../components/Report/ReportHeader";
import { ReportRow } from "../../components/Report/ReportRow";

import { getReportWithSlug, getAllReports } from "../../lib/api";
import ReportContent from "../../lib/ReportContent";

// // const ReportDetail = ({ report: initialReport }) => {
// //   return (
// //     <>
// //       <h1>Hello Detail Test Page - {report?.slug}</h1>
// //       <ReportContent content={report.content} />
// //     </>
// //   );
// // };

const ReportDetail = ({ reports, report }) => {
  return (
    <div>
      <Head>
        <title>{report?.title}</title>
      </Head>
      <main className='Main'>
          <MenuBarFull />
        <section className='Content'>
          <h1>Hello Detail page - {report?.slug}</h1>
          <h2>{report?.title}</h2>
          <img src={report.coverImage} height={100} width={100} />
          <div>
            {report.content && <ReportContent content={report.content} />}
          </div>
        </section>
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

//1. builds static page at build time
export async function getStaticProps({ params }) {
  const report = await getReportWithSlug(params.slug);
  return {
    props: { report },
  };
}

//2. generates paths for each static page
export async function getStaticPaths() {
  const reports = await getAllReports();
  return {
    paths: reports?.map((r) => ({
      params: { slug: r.slug },
    })),
    fallback: false,
  };
}

export default ReportDetail;
