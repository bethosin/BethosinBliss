import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    elements.forEach((el) => {
      el.classList.remove("active"); // reset
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location]); // 🔥 THIS IS THE FIX
};

export default useReveal;
