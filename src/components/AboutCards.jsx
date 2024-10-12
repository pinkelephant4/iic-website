import { useState } from "react";
import "../styles/AboutCards.css";
import jQuery from "jquery";

const AboutCards = () => {
  (function ($) {
    $.fn.cascadeSlider = function (opt) {
      var $this = this,
        itemClass = opt.itemClass || "cascade-slider_item",
        arrowClass = opt.arrowClass || "cascade-slider_arrow",
        $item = $this.find("." + itemClass),
        $arrow = $this.find("." + arrowClass),
        itemCount = $item.length;

      var defaultIndex = 0;

      changeIndex(defaultIndex);

      $arrow.on("click", function () {
        var action = $(this).data("action"),
          nowIndex = $item.index($this.find(".now"));

        if (action == "next") {
          if (nowIndex == itemCount - 1) {
            changeIndex(0);
          } else {
            changeIndex(nowIndex + 1);
          }
        } else if (action == "prev") {
          if (nowIndex == 0) {
            changeIndex(itemCount - 1);
          } else {
            changeIndex(nowIndex - 1);
          }
        }

        $(".cascade-slider_dot").removeClass("cur");
        //$('.cascade-slider_dot').next().addClass('cur');
      });

      // add data attributes
      for (var i = 0; i < itemCount; i++) {
        $(".cascade-slider_item").each(function (i) {
          $(this).attr("data-slide-number", [i]);
        });
      }

      // dots
      $(".cascade-slider_dot").bind("click", function () {
        // add class to current dot on click
        $(".cascade-slider_dot").removeClass("cur");
        $(this).addClass("cur");

        var index = $(this).index();

        $(".cascade-slider_item").removeClass("now prev next");
        var slide = $(".cascade-slider_slides").find(
          "[data-slide-number=" + index + "]"
        );
        slide.prev().addClass("prev");
        slide.addClass("now");
        slide.next().addClass("next");

        if (slide.next().length == 0) {
          $(".cascade-slider_item:first-child").addClass("next");
        }

        if (slide.prev().length == 0) {
          $(".cascade-slider_item:last-child").addClass("prev");
        }
      });

      function changeIndex(nowIndex) {
        // clern all class
        $this.find(".now").removeClass("now");
        $this.find(".next").removeClass("next");
        $this.find(".prev").removeClass("prev");
        if (nowIndex == itemCount - 1) {
          $item.eq(0).addClass("next");
        }
        if (nowIndex == 0) {
          $item.eq(itemCount - 1).addClass("prev");
        }

        $item.each(function (index) {
          if (index == nowIndex) {
            $item.eq(index).addClass("now");
          }
          if (index == nowIndex + 1) {
            $item.eq(index).addClass("next");
          }
          if (index == nowIndex - 1) {
            $item.eq(index).addClass("prev");
          }
        });
      }
    };
  })(jQuery);

  $("#cascade-slider").cascadeSlider({
    itemClass: "cascade-slider_item",
    arrowClass: "cascade-slider_arrow",
  });

  return (
    <>
      <div className="about-cards">
        <h1>
          Our Previous <br /> Experiences
        </h1>
        <div className="cascade-slider_container" id="cascade-slider">
          <div className="cascade-slider_slides">
            <div className="cascade-slider_item">
              <div className="card align">
                <div className="photo">
                  <img src="/assets/about-1.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="cascade-slider_item">
              <div className="card align">
                <div className="photo">
                  <img src="/assets/about-1.jpg" />
                </div>
              </div>
            </div>
            <div className="cascade-slider_item">
              <div className="card align">
                <div className="photo">
                  <img src="/assets/about-1.jpg" />
                </div>
              </div>
            </div>
            <div className="cascade-slider_item">
              <div className="card align">
                <div className="photo">
                  <img src="/assets/about-1.jpg" />
                </div>
              </div>
            </div>
            <div className="cascade-slider_item">
              <div className="card align">
                <div className="photo">
                  <img src="/assets/about-1.jpg" />
                </div>
              </div>
            </div>
          </div>

          <ol className="cascade-slider_nav">
            <li className="cascade-slider_dot cur"></li>
            <li className="cascade-slider_dot"></li>
            <li className="cascade-slider_dot"></li>
            <li className="cascade-slider_dot"></li>
            <li className="cascade-slider_dot"></li>
          </ol>

          <span
            className="cascade-slider_arrow cascade-slider_arrow-left"
            data-action="prev"
          >
            <img src="/assets/right-arrow.svg" type="image/svg+xml" />
          </span>
          <span
            className="cascade-slider_arrow cascade-slider_arrow-right"
            data-action="next"
          >
            <img src="/assets/right-arrow.svg" type="image/svg+xml" />
          </span>
        </div>
      </div>
    </>
  );
};

export default AboutCards;
