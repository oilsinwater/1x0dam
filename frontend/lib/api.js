import client from "./sanity";

const reportFields = `
title,
subtitle, 
'slug': slug.current,
date,
'featuredImage': featuredImage.asset->url,
`;
export async function getAllReports() {
  const results = await client.fetch(`*[_type == "report"]{${reportFields}}`);
  return results;
}

export async function getReportBySlug(slug) {
  const results = await client.fetch(
    `*[_type == "report" && slug.current == $slug] {${reportFields}}`,
    { slug }
  ).then(res => res?.[0])
  
  return results;
}
