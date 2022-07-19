import Head from "next/head";
import { MenuBar } from "../MenuBar/MenuBar";

export default function PageLayout({title, children}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className='Main'>
        <nav className='MenuBar'>
            <MenuBar />
        </nav>
        <div className='Content'>
            {children}
        </div>
        <style jsx>{`
          .Main {
          }
          .Menu {
          }
          .Content {
          }
          .Timeline {
          }
        `}</style>
      </main>
    </>
  );
}
