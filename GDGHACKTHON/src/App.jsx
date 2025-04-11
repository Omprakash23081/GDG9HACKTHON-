import "./App.css";
import { useState, useEffect } from "react"; // Correctly import useState and useEffect
import Splinescomp from "./components/Splinescomp";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Tests from "./components/Language";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import ProblamStatement from "./components/ProblamPrinter";
import ProblamHeader from "./components/ProblamHeader";
import style from "./App.module.css";
import ProblamStatementSpline from "./components/problamStatementSpline";
import ProblamTitalPrinter from "./components/ProblamTitalPrinter";
import Contect from "./components/Contect";
import Printer from "./components/Printer";
import { useRef } from "react";

function App() {
  // const count = useRef(0);
  const [currentSlide, setcurrentSlide] = useState("Language");
  const [currentquestions, setcurrentquestions] = useState("");
  const [currentquestion, setcurrentquestion] = useState("");
  const [currentfilter, setcurrentfilter] = useState("");

  const problam = [
    {
      id: "p1",
      type: "Physics",
      description: "Current Scholarship ",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias a saepe odio.",
      tag: ["Current", "previous", "Upcomming"],
      filter: ["importent", "most importent", "attempt", "not Attempt"],
    },
    {
      id: "p2",
      type: "chemistry",
      description: "Grovement Schime For Students",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias a saepe odio.",
      tag: ["", "", "Upcomming"],
      filter: ["importent", "most importent", "attempt", "not Attempt"],
    },
    {
      id: "p3",
      type: "mathamatics",
      description: "problam 3",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias a saepe odio.",
      tag: ["", "previous", "Upcomming"],
      filter: ["importent", "most importent", "attempt", "not Attempt"],
    },
    {
      id: "p3",
      type: "mathamatics",
      description: "Problam 4",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias a saepe odio.",
      tag: ["Current", "previous", ""],
      filter: ["importent", "most importent", "Attempted", "Not Attempted"],
    },
  ];

  function Slideset(value) {
    setcurrentSlide(value[0]);
    setcurrentquestions(value[1]);
  }

  function setquestion(value) {
    setcurrentquestions(value);
  }

  function filter(value) {
    if (currentquestion === value) {
      setcurrentfilter("All");
    } else {
      setcurrentfilter(value);
    }
  }

  function settimefilter(value) {
    // count.current += 1;
    if (currentquestion === value) {
      setcurrentquestion("");
    } else {
      setcurrentquestion(value);
    }
  }

  return (
    <>
      {currentSlide === "Language" && (
        <>
          <div className="test">
            <div className="splinescomp">
              <Splinescomp />
            </div>
            <div className="test-component">
              <Tests Slideset={Slideset} />
            </div>
          </div>
        </>
      )}

      {currentSlide === "Home" && (
        <>
          <div className="app">
            {" "}
            <Navbar />
            <Header />
            <Carousel />
            <div className="problam-statement">
              <ProblamStatementSpline />
              <ProblamStatement
                Slideset={Slideset}
                problam={problam}
                setquestion={setquestion}
              />
            </div>
            <div className={style.contect}>
              <Contect />
            </div>
          </div>
        </>
      )}

      {currentSlide === "ProblamContent" && (
        <div className={style.ProblamContent_contener}>
          <div className={style.problam}>
            <ProblamHeader
              Slideset={Slideset}
              currentquestions={currentquestions}
              filter={filter}
              settimefilter={settimefilter}
              currentquestion={currentquestion}
            />
            <ProblamTitalPrinter
              Slideset={Slideset}
              problam={problam}
              currentquestion={currentquestion}
              currentfilter={currentfilter}
            />
          </div>

        </div>
      )}
    </>
  );
}

export default App;
