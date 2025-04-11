import { useEffect, useState } from "react";

function ProblamStatement({ Slideset, problam }) {
  const [problamData, setProblamData] = useState(problam || {});

  useEffect(() => {
    async function fetchScholarships() {
      try {
        const response = await fetch("https://nrhm-mis.nic.in/SitePages/Pub-FW-Statistics2015.aspx", {
          method: "GET",
          // headers: {
          //   "Authorization": `Bearer YOUR_ACCESS_TOKEN`, // Replace with your actual access token
          //   "Content-Type": "application/json"
          // }
        });
        const data = await response.json();
        setProblamData(data.data); // Adjust based on the actual structure of the API response
      } catch (error) {
        console.error("Error fetching scholarships:", error);
      }
    }

    fetchScholarships();
  }, []);


  function set(value) {
    Slideset(value);
  }

  return (
    <div
      className="problam-contener"
      onClick={() => {
        set("ProblamContent");
      }}
    >
      <div className="subjects">
        {Object.values(problamData).map((item, index) => {
          return (
            <div className="subject-card physics" key={index}>
              <h2 className="subject-title">
                {item.description}
              </h2>
              <div className="button">
                <button className="search-button">→</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProblamStatement;