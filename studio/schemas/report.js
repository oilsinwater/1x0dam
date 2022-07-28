import { DocumentIcon } from "@sanity/icons";
import { array } from "prop-types";

export default {
  name: "report",
  title: "Report",
  icon: DocumentIcon,
  type: "document",
  fieldsets: [
    {
      title: "SEO & Metadata",
      name: "metadata",
    },{
      title: "Details",
      name: "details",
    },
    {
      title: "Content",
      name: "content",
    }
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      fieldset: "details",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
      fieldset: "details",

    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      fieldset: "details",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "date",
      title: "Published",
      type: "string",
      fieldset: "details",
      validation: (Rule) => Rule.required(),
    },
    // {
    //   name: "description",
    //   type: "string",
    //   title: "Description",
    //   description: "This description populates meta-tags on the webpage",
    //   fieldset: "metadata",
    // },
    // {
    //   name: "openGraphImage",
    //   type: "image",
    //   title: "Open Graph Image",
    //   description: "Image for sharing previews on Facebook, Twitter etc.",
    //   fieldset: "metadata",
    // },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      fieldset: "content",
      options: {
        hotspot: true,
      },
      fields: [
        {
          type: "string",
          name: "alt",
          title: "Alternative text for cover image",
          description: 'Important for SEO and accessiblity.',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "editor",
      title: "Editor",
      type: "blockContent",
      fieldset: "content",
    },
    {
      name: 'tagline',
      title: "Tagline",
      type: 'string',
      fieldset: "content",
      description: 'An excerpt of the content.',
      options: {
        maxLength: 250,
      } 
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      fieldset: "details",
      of: [{ type: "string" }],
      options: { layout: "tags"},
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "coverImage",
    },
  },
};
