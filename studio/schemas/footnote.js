import { LinkIcon } from "@sanity/icons";

export default {
  name: "footnote",
  type: "document",
  title: "Footnote",
  icon: LinkIcon,
  fields: [
    {
      name: "title",
      title: "Label",
      type: "string",
      description:
        "A human-readable label assigning relationship to a report.",
      options: {
        maxLength: 42,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "note",
      title: "Note",
      type: "simpleBlockContent",
    },
    {
      name: "URL",
      title: "URL",
      type: "url",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ["https", "http"],
        }),
    },
    {
      name: "author",
      title: "Author(s)",
      type: "string",
    },
    {
      name: "publisher",
      title: "Publisher",
      type: "string",
    },
    {
      name: "date",
      title: "Published at",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      fields: [
        {
          title: "Caption",
          name: "caption",
          type: "string",
          options: {
            isHighlighted: true,
          },
        },
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "openGraphImage",
    },
  },
};
