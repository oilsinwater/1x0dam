import { getAllReports } from "../lib/api"; 


export default function Home({reports}) {
  return (
    <div>

      {JSON.stringify(reports)}
    </div>
    )
}

// This function is called during build time (not on client side)
// Provids props to your page
// It will create a static page
export async function getStaticProps() {
  const reports = await getAllReports();
  return {
    props: {
      reports
    }
  }
}