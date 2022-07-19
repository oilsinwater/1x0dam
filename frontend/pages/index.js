import { useState } from "react";
import useSWR from 'swr'; 

import { getAllReports } from "../lib/api";
import { useGetReports } from "../actions/index";

const fetcher = url => fetch(url).then(res => res.json())

export default function Home({ reports: initialData }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
  });

  const { data: reports, error } = useGetReports(initialData);


  return <div>{JSON.stringify(reports)}</div>;
}

// This function is called during build time (not on client side)
// Provids props to your page
// It will create a static page
export async function getStaticProps() {
  const reports = await getAllReports({offset: 0});
  return {
    props: {
      reports,
    },
  };
}
