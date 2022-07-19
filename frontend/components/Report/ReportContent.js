//parses content block from Sanity to display as html
import BlockContent from "@sanity/block-content-to-react";

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

const ReportContent = ({content}) => (
  <BlockContent
    imageOptions={{ w: 320, h: 240, fit: "max" }}
    serializers={serializers}
    blocks={content}
  />
);

export default ReportContent;
