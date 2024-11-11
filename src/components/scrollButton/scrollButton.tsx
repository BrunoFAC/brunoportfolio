import { FC } from "react";
import "./scrollButton.css";
import { Fade } from "@mui/material";

export interface ScrollButtonProps {
  show: boolean;
}
export const ScrollButton: FC<ScrollButtonProps> = ({ show }) => {
  return show ? (
    <Fade exit={!show}>
      <>
        <div className="first-scroll"></div>
        <div className="second-scroll"></div>
      </>
    </Fade>
  ) : null;
};
