import { Description } from "./views/description";
import { Roles } from "./views/description.roles";
import { Header } from "./views/header";

export const OverviewViews = {
  Header,
  Description,
  Roles,
};
export interface Timeline {
  title: string;
  company: string;
  projects?: string;
  subtitle?: string;
  time: string;
  techs?: {
    title: string;
    icon: string;
  }[];
}
