import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NoteCover, NoteCoverLarge } from "../components/NoteImage";


export default function Home() {
  return (
    <>
    <Head />
      <div className="wrapper">
      <NoteCover />
      <br/>
      <NoteCoverLarge />
        <style jsx>
          {`
            .wrapper {
              padding: 24px 24px 0px;
            }
          `}
        </style>
      </div>
    </>
  );
}
