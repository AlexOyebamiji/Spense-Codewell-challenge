import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

export default function useLocoScroll() {
  useEffect(() => {
    const scrollEl = document.querySelector("[data-scroll-container]");
    const locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      lerp: 0.09,
    });
  }, []);
}
