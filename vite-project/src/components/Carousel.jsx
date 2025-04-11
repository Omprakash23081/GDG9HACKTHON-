import style from "./Carousel.module.css";
import { setupScrolBar } from "../JAVASCRIPT/Carousel"; // Adjust the path if necessary
import { useEffect } from "react";

function Carousel() {
  useEffect(() => {
    // Call the setupScrolBar function after the component mounts
    setupScrolBar();
  }, []);

  return (
    <div className={`${style.carousel_container}`}>
      <div
        className={`${style.carousel_slide} carousel_slide`}
        style={{ transform: "translateX(0%)" }}
      >
        <img src="./public/lobo.jpg" alt="Image 1" />
        <img src="./public/lobo.jpg" alt="Image 2" />
        <img src="./public/lobo.jpg" alt="Image 3" />
      </div>
    </div>
  );
}
export default Carousel;
