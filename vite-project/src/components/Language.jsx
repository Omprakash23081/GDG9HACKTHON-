import React, { useEffect, useState } from "react";

const languages = [
  "English",
  "Spanish",
  "French",
  "German",
  "Chinese",
  "Japanese",
  "Arabic",
  "Russian",
  "Portuguese",
  "Korean",
  "Italian",
  "Hindi",
];

function Tests({ Slideset }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSpread, setIsSpread] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null); // State to store the selected language

  useEffect(() => {
    setIsLoaded(true);
    setTimeout(() => setIsSpread(true), 1000);
  }, []);

  function set(value) {
    Slideset(value);
  }

  return (
    <div className="container">
      <div className="globe-container">
        {/* Language Boxes */}
        <div className="language-container">
          {languages.map((lang, index) => {
            const angle = index * (360 / languages.length) * (Math.PI / 180);
            const radius = 200;
            const finalLeft = Math.cos(angle) * radius;
            const finalTop = Math.sin(angle) * radius;

            return (
              <div
                key={lang}
                className={`language-box ${isLoaded ? "loaded" : ""}`}
                style={{
                  left: isSpread ? `calc(50% + ${finalLeft}px)` : "50%",
                  top: isSpread ? `calc(50% + ${finalTop}px)` : "50%",
                  transitionDelay: `${1000 + index * 100}ms`,
                }}
                onClick={() => {
                  if (lang === "Hindi" || lang === "English") {
                    setSelectedLanguage(lang); // Update the selected language
                    set(["Home"]);
                  } else {
                    alert(`Sorry ${lang} is not supported yet`);
                  }
                }}
              >
                {lang}
              </div>
            );
          })}
        </div>
      </div>

      {/* Display the selected language */}
      {selectedLanguage && (
        <div className="selected-language">
          <p>You selected: {selectedLanguage}</p>
        </div>
      )}
    </div>
  );
}

export default Tests;
