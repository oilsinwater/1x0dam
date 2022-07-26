//parses content block from Sanity to display as html
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../lib/api";

const serializers = {
  types: {
    image: ({node: {asset, alt}}) => {
        return (
            <div>
                <img src={urlFor(asset).height(300).fit('max').url()} />
                <div>{alt}</div>
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
