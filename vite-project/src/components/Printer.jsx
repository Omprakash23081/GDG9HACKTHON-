function Printer({ Slideset }) {
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
        <div className="subject-card physics">
          <h2 className="subject-title">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem vel
            sapiente quo! Labore!
          </h2>

          <div className="button">
            <button className="search-button">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Printer;
