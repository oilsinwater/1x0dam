import { ReportBlock } from './ReportBlock';
import { ReportRow } from './ReportRow';

export default {
  title: 'Report/Row',
  component: ReportRow,
};

export const Primary = (args) => (
    <ReportRow {...args}>
      <ReportBlock />
    </ReportRow>
);
