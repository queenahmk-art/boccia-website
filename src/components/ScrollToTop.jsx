import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    scrollToTop();
    const animationFrame = window.requestAnimationFrame(scrollToTop);
    const timeout = window.setTimeout(scrollToTop, 0);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}
