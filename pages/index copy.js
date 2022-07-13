import Head from "next/head";
import { PostHeader } from "../components/PostHeader";
import { PostRow } from "../components/PostRow";
import { MenuBar, MenuBarFull } from "../components/MenuBar";

export default function Home() {
  return (
    <>
      <div className='Body'>
      <Head />
        <div className='Navigation'>
          <MenuBarFull />
        </div>
        <div className='Main'>
          <PostHeader />
          <br />
          <PostRow />
          <PostRow />
        </div>

        <style jsx>
          {`
            .Navigation {
              grid-area: Navigation;
              position: fixed;
              top: 0px;
              right: 0px;
              z-index: 100;
              padding: 0px;
              max-width: 44px;
              height: 100vh;
              background-color: white;
              border-left: 1px solid black;
            }
            .Main {
              grid-area: Main;
              display: flex;
              flex-direction: column;
            }
          `}
        </style>
      </div>
    </>
  );
}
