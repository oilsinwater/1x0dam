import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { Timeline } from "./Timeline";
import { MenuBar } from "../MenuBar/MenuBar";
import { HomeReport } from "./HomeReport";

export const HomeScreen = ({}) => {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <main className='Main'>
        <nav className='Menu'>
          <MenuBar />
        </nav>
        <div className='Content'>
          <HomeReport />
        </div>
        <aside className='Timeline'>
          <Timeline />
        </aside>
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
};

HomeScreen.propTypes = {};
