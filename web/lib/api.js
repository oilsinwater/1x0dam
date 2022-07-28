import client from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

//simplifies variables for objection projection fetched by getReportWithSlug
const reportFields = `
_id,
title,
subtitle,
date,
tagline,
tags,
'footnote': footnote->name,
'slug': slug.current,
'coverImage': coverImage.asset->url,
editor,
`;

//to simplify urlFor below
const builder = imageUrlBuilder(client);

export function urlFor() {
  return builder.image(source);
}

// fetches all reports ordered by
export async function getAllReports({ offset } = { offset: 0 }) {
  const results = await client.fetch(
    `*[_type == "report"] | order(date desc){${reportFields}}[${offset}...${
      offset + 5
    }]`
  );
  return results;
}

export async function getReportWithSlug(slug) {
  const results = await client
    .fetch(
      `*[_type == "report" && slug.current == $slug] {
      ${reportFields}
      content[]{..., "asset": asset->}
    }`,
      { slug }
    )
    .then((res) => res?.[0]);

  return results;
}
