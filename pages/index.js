import { PostHeader } from "../components/PostHeader";
import { PostRow } from "../components/PostRow";
import { MenuBar, MenuBarFull } from "../components/MenuBar";


export default function Home() {
  return (
    <>
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
              height: 100vh;
              overflow: hidden;
              overflow-y: scroll;
            }
            .Navigation {
              position: fixed;
              top: 0px;
              right: 0px;
              z-index: 100;
              overflow: hidden;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
            }
            .Main {
            }
          `}
        </style>
      </body>
    </>
  );
}
