import { useState, useEffect } from "react";
import jQuery from "jquery";
import "../styles/AboutCards.css";

const AboutCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current card index
  const totalItems = 5; // Total number of cards

  // Array of image sources for each card
  const cardImages = [
    "/assets/about-6.png",
    "/assets/about-2.png",
    "/assets/about-3.png",
    "/assets/about-4.png",
    "/assets/about-5.png",
  ];

  useEffect(() => {
    // Initialize jQuery slider logic after component mounts
    (function ($) {
      $.fn.cascadeSlider = function () {
        const $slider = $("#cascade-slider");
        const $arrows = $slider.find(".cascade-slider_arrow");

        // Attach event handlers
        $arrows.on("click", function () {
          const action = $(this).data("action");
          handleArrowClick(action);
        });

        $(".cascade-slider_dot").on("click", function () {
          const index = $(this).index();
          setCurrentIndex(index); // Update state with clicked dot index
        });
      };
    })(jQuery);

    $("#cascade-slider").cascadeSlider();
  }, []);

  const handleArrowClick = (action) => {
    setCurrentIndex((prevIndex) =>
      action === "next"
        ? (prevIndex + 1) % totalItems
        : (prevIndex - 1 + totalItems) % totalItems
    );
  };

  const getClassForItem = (index) => {
    const position = (index - currentIndex + totalItems) % totalItems;

    switch (position) {
      case 0:
        return "now";
      case 1:
        return "next";
      case 2:
        return "next-next";
      case totalItems - 1:
        return "prev";
      case totalItems - 2:
        return "prev-prev";
      default:
        return "";
    }
  };

  return (
    <div className="about-cards">
      <h1>
        Our Previous <br /> Experiences
      </h1>
      <div className="cascade-slider_container" id="cascade-slider">
        <div className="cascade-slider_slides">
          {Array.from({ length: totalItems }).map((_, index) => (
            <div
              className={`cascade-slider_item ${getClassForItem(index)}`}
              key={index}
            >
              <div className="card align">
                <div className="photo">
                  {/* Render the corresponding image for each card */}
                  <img
                    src={cardImages[index]}
                    alt={`About ${index + 1}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <ol className="cascade-slider_nav">
          {Array.from({ length: totalItems }).map((_, index) => (
            <li
              className={`cascade-slider_dot ${
                index === currentIndex ? "cur" : ""
              }`}
              key={index}
              onClick={() => setCurrentIndex(index)}
            ></li>
          ))}
        </ol>

        <span
          className="cascade-slider_arrow cascade-slider_arrow-left"
          data-action="prev"
        >
          <img src="/assets/left-arrow-svgrepo-com.svg" alt="Previous" />
        </span>
        <span
          className="cascade-slider_arrow cascade-slider_arrow-right"
          data-action="next"
        >
          <img src="/assets/right-arrow-svgrepo-com.svg" alt="Next" />
        </span>
      </div>
    </div>
  );
};

export default AboutCards;
