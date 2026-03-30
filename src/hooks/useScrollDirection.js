import { useState, useEffect, useRef } from "react";

const useScrollDirection = (threshold = 10) => {
  const [scrollDir, setScrollDir] = useState("up");
  const [atTop, setAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setAtTop(currentScrollY < 20);

      if (Math.abs(currentScrollY - lastScrollY.current) < threshold) return;

      setScrollDir(currentScrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { scrollDir, atTop };
};

export default useScrollDirection;
