import { ReportHeaderText } from './ReportHeaderText';
import { ReportHeader } from './ReportHeader';

export default {
  title: 'Report/Header',
  component: ReportHeader,
}

export const Primary = (args) => (
  <>
    <ReportHeader {...args}>
      <ReportHeaderText />
    </ReportHeader>
  </>
);
