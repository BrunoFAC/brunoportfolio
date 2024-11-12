export interface TimelineProps {
  title: string;
  subtitle?: string;
  underSubtitle?: string;
  time?: string;
  projects?: string;
  type?: "Education" | "Professional";
  isContinuation?: boolean;
  order: number;
}

export const timeline: TimelineProps[] = [
  {
    title: "Software Developer",
    subtitle: "Start of internship at ITSector",
    time: "Fev 2022",
    order: 0,
  },
  {
    title: "Software Developer",
    subtitle: "End of internship at ITSector",
    time: "Jun 2022",
    order: 1,
  },
  {
    title: "Degree Computer Engineering",
    subtitle: "Completed degree in ISPGAYA",
    time: "Jul 2022",
    order: 2,
  },
  {
    title: "Education",
    type: "Education",
    order: 3,
  },
  {
    title: "SI Programmer",
    subtitle: "Started working at ITSector",
    projects: "MSE (Millennium BCP Enterprise)",
    time: "Aug 2022",
    order: 4,
  },
  {
    title: "SI Consultant",
    subtitle: "Progressed at ITSector",
    projects: "MSE (Millennium BCP Enterprise)",
    underSubtitle:
      "Alongside my professional work, I have actively engaged in personal projects to enhance my expertise",
    time: "Apr 2024",
    order: 5,
  },
];
