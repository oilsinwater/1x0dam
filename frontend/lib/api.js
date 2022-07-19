import client from "./sanity";
import imageUrlBuilder from "@sanity/image-url";

const reportFields = `
title,
subtitle, 
'slug': slug.current,
date,
featuredImage,
`;

//to simplify urlFor below
const builder = imageUrlBuilder(client);

export function urlFor() {
  return builder.image(source);
}

export async function getAllReports({offset} = {offset: 0}) {
  const results = await client
  .fetch(`*[_type == "report"] | order(date desc){${reportFields}}[${offset}...${offset + 5}]`);
  return results;
}

export async function getReportBySlug(slug) {
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
