import React, { useState, useEffect } from "react";
import Contents from "./Contents";
import { Values, Page, Page2, Story, Team, CallToAction, Footer } from "./Contents";
import Preloader from "./Preloader";

import Mainlayout from "./Mainlayout";

function AllPage() {
  const [preloading, setPreloading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {preloading ? (
        <Preloader />
      ) : (
        <Mainlayout>
          <Contents />
          <Story />
          <Page />
          <Page2 />
          <Team />
          <Values />
          <CallToAction/>
          <Footer />
        </Mainlayout>
      )}
    </>
  );
}

export default AllPage;
