import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { PostHeader } from "../components/PostHeader";
import { PostRow } from "../components/PostRow";

export default function Home() {
  return (
    <>
      <div className="wrapper">
        <PostHeader />
        <PostRow />
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
