import { useState } from "react";
import "../styles/Testimonials.scss";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "I love this product",
      author: "John Doe",
    },
    {
      quote: "afad fafsaf afas",
      author: "Harry Potter",
    },
    {
      quote: "afsf afasaef werqwq qrqe",
      author: "John Snow",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="tm-root">
      <div className="testimonials">
        <div className="testimonials-quote">
          {testimonials[currentIndex].quote}
        </div>
        <div className="testimonials-author">
          {testimonials[currentIndex].author}
        </div>
        <div className="testimonials-nav">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
