import { useRef, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './Carousel.css';

const Carousel = () => {
  const carouselRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(true);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  // Handler for scrolling horizontally when scrolling vertically
  const handleScroll = (e) => {
    e.preventDefault();
    const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

    // Scroll horizontally based on vertical scroll
    if (carouselRef.current.scrollLeft + e.deltaY <= maxScrollLeft) {
      carouselRef.current.scrollLeft += e.deltaY * 1.5; // Adjust sensitivity for smoother trackpad and mouse scroll
      setIsScrollable(false); // Prevent page scrolling while carousel is active
      setHasReachedEnd(false); // Reset end reach state
    }

    // Check if the carousel has reached the end
    if (carouselRef.current.scrollLeft >= maxScrollLeft) {
      setIsScrollable(true);
      setHasReachedEnd(true);
    } else {
      setIsScrollable(false);
    }
  };

  // Function to scroll the page down automatically after reaching the end of the carousel
  const scrollToEnd = () => {
    if (hasReachedEnd) {
      window.scrollTo({
        top: carouselRef.current.getBoundingClientRect().bottom + window.scrollY,
        behavior: 'smooth',
      });
    }
  };

  // Swipeable handlers for touch devices
  const handlers = useSwipeable({
    onSwipedLeft: () => (carouselRef.current.scrollLeft += 150),
    onSwipedRight: () => (carouselRef.current.scrollLeft -= 150),
    trackMouse: true,
  });

  useEffect(() => {
    const carousel = carouselRef.current;
    const onWheel = (e) => handleScroll(e);

    carousel.addEventListener('wheel', onWheel, { passive: false });

    // Prevent body from scrolling when carousel is active
    document.body.style.overflowY = isScrollable ? 'auto' : 'hidden';

    // Trigger scroll down animation when reaching the end
    scrollToEnd();

    return () => {
      carousel.removeEventListener('wheel', onWheel);
      document.body.style.overflowY = 'auto'; // Re-enable scrolling if component is unmounted
    };
  }, [isScrollable, hasReachedEnd]);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container" {...handlers} ref={carouselRef}>
        {[...Array(8)].map((_, index) => (
          <div className="carousel-card" key={index}>
            Card {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
