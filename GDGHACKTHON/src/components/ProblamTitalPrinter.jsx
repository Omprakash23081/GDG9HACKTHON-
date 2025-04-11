import { useEffect, useState } from "react";

function ProblamTitalPrinter({
  Slideset,
  problam,
  currentquestion,
  currentfilter,
}) {
  const [problamData, setProblamData] = useState(problam || []);

  // useEffect(() => {
  //   async function fetchScholarships() {
  //     try {
  //       const response = await fetch("https://nrhm-mis.nic.in/SitePages/Pub-FW-Statistics2015.aspx");
  //       const data = await response.json();
  //       setProblamData(data.data || []); // Ensure it's an array
  //     } catch (error) {
  //       console.error("Error fetching scholarships:", error);
  //     }
  //   }

  //   fetchScholarships();
  // }, []);

  function set(value) {
    Slideset(value);
  }

  let filteredProblams = currentquestion
    ? problamData.filter((item) => item.tag.includes(currentquestion))
    : problamData;

  if (currentfilter === "All") {
    filteredProblams = filteredProblams;
  } else {
    filteredProblams = currentfilter
      ? filteredProblams.filter((item) => item.filter.includes(currentfilter))
      : filteredProblams;
  }

  return (
    <div className="problam-contener">
      <div className="subjects2 subjects" >
        {filteredProblams.length > 0 ? (
          filteredProblams.map((item, index) => (
            <div className="subject-card physics" key={index} onClick={() => set("ProblamContent")}>
              <h2 className="subject-title">{item.title}</h2>
              <div className="button">
                <button className="search-button">→</button>
              </div>
            </div>
          ))
        ) : (
          <p className="NoProblam">No problam found for {currentquestion}.</p>
        )}
      </div>
    </div>
  );
}

export default ProblamTitalPrinter;
