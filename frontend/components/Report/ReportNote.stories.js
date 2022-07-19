import { ReportNoteOnly, ReportNote, ReportNoteLarge } from "./ReportNote";
import { NoteCover, NoteCoverLarge } from "./NoteCover";
import { NoteText } from "./NoteText";

export default {
  title: "Report/Note",
  component: ReportNote,
  subcomponents: { NoteCover, NoteCoverLarge, NoteText },
};

const ContentOnly = (args) => <ReportNoteOnly {...args} />;
export const Primary = ContentOnly.bind({});
ContentOnly.args = {
  primary: true,
};

const Regular = (args) => <ReportNote {...args} />;
export const Secondary = Regular.bind({});
Regular.args = {
  secondary: true,
};

const Large = (args) => <ReportNoteLarge {...args} />;
export const Tertiary = Large.bind({});
Large.args = {
  tertiary: true,
};
