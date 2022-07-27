import React from "react";

const LinkRender = ({ children }) => (
  <span
    style={{
      textDecoration: "underline",
      fontWeight: "bold",
      color: "#2276fc",
    }}
  >
    {children} 🌍
  </span>
);

export default {
  title: "Simple Block Content",
  name: "simpleBlockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ["https", "http", "mailto", "tel"],
                  }),
              },
            ],
            blockEditor: {
              icon: () => "🌍",
              render: LinkRender,
            },
          },
        ],
      },
    },
  ],
};
