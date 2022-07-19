//parses content block from Sanity to display as html
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../../lib/api";

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
    image: ({node: {asset, alt}}) => {
        return (
            <div className="ReportImage">
                <img src={urlFor(asset.url).height(300).fit(max)} />
                <div className="ImageAlt">{alt}</div>
            </div>
        )
    }
  },
};

const ReportContent = ({content}) => (
  <BlockContent
    serializers={serializers}
    blocks={content}
  />
);

export default ReportContent;
