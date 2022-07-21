import { getReportWithSlug, getAllReports } from "../../lib/api";

import ReportContent from "../../components/Report/ReportContent";

// // const ReportDetail = ({ report: initialReport }) => {
// //   return (
// //     <>
// //       <h1>Hello Detail Test Page - {report?.slug}</h1>
// //       <ReportContent content={report.content} />
// //     </>
// //   );
// // };

const ReportDetail = ({ report }) => {
  return (
    <>
      <h1>Hello Detail page - {report?.slug}</h1>
      <h2>{report?.title}</h2>
      <img src={report.coverImage} height={100} width={100}/>
      <div>{report.content && <ReportContent content={report.content} />}</div>
    </>
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
