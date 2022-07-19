import client from "./sanity";
import imageUrlBuilder from '@sanity/image-url';

const reportFields = `
title,
subtitle, 
'slug': slug.current,
date,
'featuredImage': featuredImage.asset->url,
`;

export function urlFor() {
  return imageUrlBuilder(client).image(source);
}

export async function getAllReports() {
  const results = await client.fetch(`*[_type == "report"]{${reportFields}
  content[]{..., "asset": asset->}
}`);
  return results;
}

export async function getReportBySlug(slug) {
  const results = await client
    .fetch(`*[_type == "report" && slug.current == $slug] {${reportFields}}`, {
      slug,
    })
    .then((res) => res?.[0]);

  return results;
}
