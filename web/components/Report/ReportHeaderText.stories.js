import { ReportHeaderText } from "./ReportHeaderText";
import { ReportHeaderTitle } from "./ReportHeaderTitle";
import { ReportHeaderDetails } from "./ReportHeaderDetails";

export default {
  title: 'Report/Header/Text',
  component: ReportHeaderText,
};

export const Primary = (args) => (
  <>
    <ReportHeaderText {...args}>
      <ReportHeaderTitle />
      <ReportHeaderDetails />
    </ReportHeaderText>
  </>
);
