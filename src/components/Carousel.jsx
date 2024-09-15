import { useRef, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion'; // Import framer-motion
import '../styles/Carousel.css';

const Carousel = () => {
  const carouselRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(true);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  // Handler for scrolling horizontally when scrolling vertically
  const handleScroll = (e) => {
    e.preventDefault();
    const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    const scrollLeft = carouselRef.current.scrollLeft;

    // Scroll horizontally based on vertical scroll
    if (scrollLeft + e.deltaY <= maxScrollLeft) {
      carouselRef.current.scrollLeft += e.deltaY * 5; // Adjust sensitivity
      setIsScrollable(false); // Prevent vertical scroll
      setHasReachedEnd(false); // Reset end state
    }

    // Detect if last card is fully visible
    const lastCard = carouselRef.current.lastChild;
    const lastCardRight = lastCard.getBoundingClientRect().right;
    const carouselRight = carouselRef.current.getBoundingClientRect().right;

    if (lastCardRight <= carouselRight) {
      setIsScrollable(true); // Enable vertical scroll
      setHasReachedEnd(true);
    } else {
      setIsScrollable(false); // Disable vertical scroll until end
    }
  };

  // Function to scroll the page down after reaching the end of the carousel
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

    // Disable page scroll while carousel is active
    document.body.style.overflowY = isScrollable ? 'auto' : 'hidden';

    // Trigger scroll down animation when reaching the end
    scrollToEnd();

    return () => {
      carousel.removeEventListener('wheel', onWheel);
      document.body.style.overflowY = 'auto'; // Re-enable scrolling if component is unmounted
    };
  }, [isScrollable, hasReachedEnd]);

  return (
    <>
      <div className="heading">
        <h1>THEMES</h1>
      </div>
      <div className="carousel-wrapper">
        <div className="carousel-container" {...handlers} ref={carouselRef}>
          {[...Array(8)].map((_, index) => (
            <motion.div
              className="carousel-card"
              key={index}
              whileHover={{ rotateY: 180 }} // Add flip animation on hover
              transition={{ duration: 0.6, ease: 'easeInOut' }} // Smooth animation
            >
              <div className="carousel-card-inner">
                <div className="carousel-card-front">
                  <p>Card {index + 1} - Front</p>
                </div>
                <div className="carousel-card-back">
                  <p>Card {index + 1} - Back</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
