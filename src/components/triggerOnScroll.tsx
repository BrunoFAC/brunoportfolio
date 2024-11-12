import { FC, MutableRefObject, ReactNode, useEffect } from "react";

interface TriggerOnScrollProps {
  children: ReactNode;
  sectionsRef: MutableRefObject<(HTMLElement | null)[]>;
  setActiveId: (value: string) => void;
}

export const TriggerOnScroll: FC<TriggerOnScrollProps> = ({
  children,
  sectionsRef,
  setActiveId,
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return <>{children}</>;
};
