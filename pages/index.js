import Head from "next/head";
import { PostHeader } from "../components/PostHeader";
import { PostRow } from "../components/PostRow";
import { MenuBar, MenuBarFull } from "../components/MenuBar";

export default function Home() {
  return (
    <>
      <Head />
      <body className='Body'>
        <nav className='Navigation'>
          <MenuBarFull />
        </nav>
        <section className='Main'>
          <PostHeader />
          <br />
          <PostRow />
          <PostRow />
        </section>
        <style jsx>
          {`
            .Body {
              width: calc(100vw - 44px);
              overflow-x: hidden;
              height: 100vh;
            }
            .Navigation {
              position: fixed;
              top: 0px;
              right: 0px;
              visibility: hidden;
              z-index: 100;
              overflow: hidden;
            }
          `}
        </style>
      </body>
    </>
  );
}
