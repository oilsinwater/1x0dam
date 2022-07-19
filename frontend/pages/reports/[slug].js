import { getReportBySlug, getAllReports } from "../../lib/api";

import ReportContent from "../../components/Report/ReportContent";

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      return (
        <pre data-language={language}>
          <code>{code}</code>
          <p>{filename}</p>
        </pre>
      );
    },
  },
};

const ReportDetail = ({ report }) => {
  return (
    <>
      <h1>Hello Detail Test Page - {report?.slug}</h1>
      //parses content block from Sanity to display as html
      <ReportContent content={report.content} />
    </>
  );
};

export async function getStaticProps({ params }) {
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
