import React, { useState } from "react";
import Navbar from "../components/navbar";
import { useRef } from "react";
import classes from "./home.module.css";
import axios from "axios";
import Loader from "../components/loader/loader";
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    window.MathJax.typeset();
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const [element, setElement] = useState({
    title: "",
  });
  const scrape = useRef();
  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const query = scrape.current.value;
    try {
      const response = await axios.post(
        "http://localhost:5000/run_selenium_script",
        { query }
      );

      // Wait for 500 milliseconds (.5 second) because maths element does not render correctly short on time to resolve
      await new Promise((resolve) => setTimeout(resolve, 500));

      const tempContainer = document.createElement("div");
      tempContainer.innerHTML = response.data;
      const typographyElements =
        tempContainer.querySelectorAll(".problem-statement");
      console.log(typographyElements);
      setElement((prevState) => ({
        ...prevState,
        typographyElements: Array.from(typographyElements),
      }));
      setIsLoading(false);
    } catch (error) {
      console.error("Error sending query:", error);
      setIsLoading(false);
    }
  };
  return (
    <div className={classes.container}>
      <Navbar></Navbar>
      {isLoading && <Loader></Loader>}
      {!isLoading && !element.length && (
        <div className={classes.formcontainer}>
          <form onSubmit={handleSubmit}>
            <input className={classes.form} ref={scrape} />
            <button className={classes.button} type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
      <div className={classes.scrapedMaterial}>
        {!isLoading &&
          element.typographyElements &&
          element.typographyElements.length > 0 && (
            <div>
              {element.typographyElements.map((el, index) => (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{ __html: el.outerHTML }}
                />
              ))}
            </div>
          )}
      </div>
    </div>
  );
};

export default Home;
