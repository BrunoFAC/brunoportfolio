import { MutableRefObject, useEffect, useState } from "react";

export const useVisibility = (ref: MutableRefObject<null>, timer?: number) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (!isVisible) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              setIsVisible(entry.isIntersecting);
            });
          },
          { threshold: 0.5 }
        );

        if (ref.current) {
          observer.observe(ref.current);
        }

        return () => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        };
      }
    }, timer ?? 0);
  }, [isVisible]);
  return {
    isVisible,
  };
};
