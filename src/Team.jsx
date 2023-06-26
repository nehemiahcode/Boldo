import React, { useEffect, useState } from "react";
import Mainlayout from "./Mainlayout";
import { Footer, Team } from "./Contents";
import Preloader from "./Preloader";

function TeamPage() {
  const [preloading, setPreloading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {preloading ? (
        <Preloader />
      ) : (
       <>
        <Mainlayout>
        <h1></h1>
          <Team />
          <Footer />
        </Mainlayout>
       </>
      )}
    </>
  );
}

export default TeamPage;
