import { getReportBySlug, getAllReports } from "../../lib/api";

const ReportDetail = ({report}) => {
  return (
    <>
      <h1>Hello Detail Test Page - {report?.slug}</h1>
    </>
  );
};

export async function getStaticProps({params}) {
  const report = await getReportBySlug(params.slug);
  return {
    props: { report },
  };
}

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
