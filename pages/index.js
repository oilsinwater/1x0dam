import Head from "next/head";
import styles from "../styles/Home.module.css";
import { PostHeader } from "../components/PostHeader";
import { PostRow } from "../components/PostRow";
import { MenuBarFull } from "../components/MenuBar";

export default function Home() {
  return (
    <>
      <Head />
      <div className='Main'>
        <div className='Navigation'>
          <MenuBarFull />
        </div>
        <div className='Body'>
          <PostHeader />
          <br />
          <PostRow />
          <PostRow />
        </div>

        <style jsx>
          {`
            .Main {
              position: relative;
              height: 100vh;
              display: grid;
              grid:
                "Body Navigation" 1fr
                / 1fr 44px;
              gap: 0px;
            }
            .Navigation {
              grid-area: Navigation;
              positioN: fixed;
              top: 0px;
              right: 0px;
              overflow: hidden;
            }
            .Body {
              grid-area: Main;
              width: calc(100vw - 44px);
            }
          `}
        </style>
      </div>
    </>
  );
}
