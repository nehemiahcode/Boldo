import React, { useState, useEffect } from "react";
import Mainlayout from "./Mainlayout";
import { Footer, Values } from "./Contents";
import Preloader from "./Preloader";

function ValuePage() {
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
        <Mainlayout>
          <Values />
          <Footer />
        </Mainlayout>
      )}
    </>
  );
}

export default ValuePage;
