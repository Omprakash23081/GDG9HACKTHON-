import style from "./ProblamHeader.module.css";
import { useState, useRef } from "react";

function ProblamHeader({
  Slideset,
  currentquestions,
  settimefilter,
  currentquestion,
  filter,
}) {
  // const count = useRef(0);

  const [currentfilter, setcurrentfilter] = useState("All");

  function set2(value) {
    if (currentfilter === value) {
      // setcurrentfilter("All");
    } else {
      setcurrentfilter(value);
    }
  }

  function set1(value) {
    settimefilter(value);
  }

  function setFilters(value) {
    filter(value);
  }

  return (
    <>
      <div className={style.header}>
        <div
          className={style.chapter_icon}
          id={style.back_icon}
          onClick={(event) => Slideset(["Home"])}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#0000F5"
          >
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
          </svg>
        </div>
        <div className={style.header_title}>
          {currentquestion
            ? currentquestions + "   (" + currentquestion + ")"
            : currentquestions}
        </div>
      </div>

      <div className={style.categories}>
        <div
          className={`${style.category_card} ${
            currentquestion === "previous" && style.actives
          } `}
          onClick={() => set1("previous")}
        >
          <div className={style.category_title}>previous</div>
          <div className={style.category_icon}>
            <img
              src="https://web.getmarks.app/_next/image?url=https%3A%2F%2Fcdn-assets.getmarks.app%2Fapp_assets%2Fimg%2Fpyq_buckets%2Fic_bucket_beginner.png&w=48&q=75"
              alt=""
            />
          </div>
        </div>
        <div
          className={`${style.category_card} ${
            currentquestion === "Current" && style.actives
          } `}
          onClick={() => set1("Current")}
        >
          <div className={style.category_title}>Current</div>
          <div className={style.category_icon}>
            <img
              src="https://web.getmarks.app/_next/image?url=https%3A%2F%2Fcdn-assets.getmarks.app%2Fapp_assets%2Fimg%2Fpyq_buckets%2Fic_bucket_target_mains.png&w=48&q=75"
              alt=""
            />
          </div>
        </div>
        <div
          className={`${style.category_card} ${
            currentquestion === "Upcomming" && style.actives
          } `}
          onClick={() => set1("Upcomming")}
        >
          <div className={style.category_title}>Upcomming</div>
          <div className={style.category_icon}>
            <img
              src="https://web.getmarks.app/_next/image?url=https%3A%2F%2Fcdn-assets.getmarks.app%2Fapp_assets%2Fimg%2Fpyq_buckets%2Fic_bucket_advance_climb.png&w=48&q=75"
              alt=""
            />
          </div>
        </div>
        {/* <div
          className={`${style.category_card} ${currentquestion === "Easy Bhi Tricky" && style.actives
            } `}
          onClick={() => set1("Easy Bhi Tricky")}
        >
          <div className={style.category_title}>Easy Bhi Tricky</div>
          <div className={style.category_icon}>
            <img
              src="https://cdn-assets.getmarks.app/app_assets/img/pyq_buckets/easy_and_tricky_icon_light.svg"
              alt=""
            />
          </div>
        </div> */}
      </div>

      <div className={style.filters}>
        <button
          className={`${style.filter_btn} ${
            currentfilter === "Filter" && style.active
          }`}
          onClick={(event) => {
            setFilters("Filter");
            set2("Filter");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="19px"
            viewBox="0 -960 960 960"
            width="28px"
            fill="#FFFFFF"
          >
            <path d="M440-120v-240h80v80h320v80H520v80h-80Zm-320-80v-80h240v80H120Zm160-160v-80H120v-80h160v-80h80v240h-80Zm160-80v-80h400v80H440Zm160-160v-240h80v80h160v80H680v80h-80Zm-480-80v-80h400v80H120Z" />
          </svg>
          <p className={style.filterp}>Filter</p>
        </button>
        <button
          className={`${style.filter_btn} ${
            currentfilter === "All" && style.active
          }`}
          onClick={(event) => {
            set2("All");
            setFilters("All");
          }}
        >
          All
        </button>
        <button
          className={`${style.filter_btn} ${
            currentfilter === "important" && style.active
          }`}
          onClick={(event) => {
            setFilters("importent");
            set2("important");
          }}
        >
          important
        </button>
        <button
          className={`${style.filter_btn} ${
            currentfilter === "Most important" && style.active
          }`}
          onClick={(event) => {
            set2("Most important");
            setFilters("Most importent");
          }}
        >
          Most important
        </button>
        <button
          className={`${style.filter_btn} ${
            currentfilter === "Attempted" && style.active
          }`}
          onClick={(event) => {
            setFilters("Attempted");
            set2("Attempted");
          }}
        >
          Attempted
        </button>
        <button
          className={`${style.filter_btn} ${
            currentfilter === "Not Attempted" && style.active
          }`}
          onClick={(event) => {
            setFilters("Not Attempted");
            set2("Not Attempted");
          }}
        >
          Not Attempted
        </button>
      </div>
    </>
  );
}
export default ProblamHeader;
