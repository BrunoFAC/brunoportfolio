"use client";
import { colors } from "@/consts";
import {
  Stepper as LineStepper,
  StepConnector,
  Box,
  StepLabel,
  Step,
  styled,
  stepConnectorClasses,
  Typography,
} from "@mui/material";

import { FC } from "react";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: colors.blue,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: colors.blue,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: colors.disabled,
    borderTopWidth: 3,
    borderRadius: 1,
    ...theme.applyStyles("dark", {
      borderColor: colors.white,
      cursor: "pointer",
    }),
  },
}));
const steps = [
  {
    id: "0",
    label: "ABOUT ME",
  },
  {
    id: "1",
    label: "OVERVIEW",
  },
  {
    id: "2",
    label: "PROJECTS",
  },
  {
    id: "3",
    label: "CONTACTS",
  },
];

export interface StepperProps {
  activeStep: string;
  goTo: (activeStep: string) => void;
}
export const Stepper: FC<StepperProps> = ({ activeStep, goTo }) => {
  const step = Number(steps.find((e) => e.id === activeStep)?.id);
  return (
    <>
      {/* less than 900px */}
      <Box
        sx={{
          display: { md: "none", xs: "flex" },
          position: "fixed",
          width: "calc(100% - 32px)",
          alignItems: "center",
          top: 0,
          padding: "20px 16px 16px",
          backgroundColor: colors.transparentBackground,
          backdropFilter: "blur(3px)",
          zIndex: 2,
        }}
      >
        <Box sx={{ minWidth: "100%" }}>
          <LineStepper activeStep={step} alternativeLabel>
            {steps.map((label, index) => (
              <Step
                sx={{ cursor: "pointer", color: colors.blue }}
                onClick={() => {
                  console.log("batatas");
                  goTo(label.id);
                }}
                key={`${label.label}-${index}`}
              >
                <StepLabel>
                  <Typography variant="body2" sx={{ color: colors.white }}>
                    {label.label}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </LineStepper>
        </Box>
      </Box>

      {/* bigger than 900px */}
      <Box
        sx={{
          display: { md: "flex", xs: "none" },
          position: "fixed",
          height: "100vh",
          alignItems: "center",
          padding: "0 80px 0 16px",
          right: 0,
          backgroundColor: colors.transparentBackground,
        }}
      >
        <Box sx={{ maxWidth: 500 }}>
          <LineStepper
            connector={<QontoConnector />}
            activeStep={step}
            orientation="vertical"
          >
            {steps.map((step, index) => (
              <Step
                sx={{ cursor: "pointer", color: colors.blue }}
                onClick={() => {
                  console.log("batatas");
                  goTo(step.id);
                }}
                key={`${step.label}-${index}`}
              >
                <StepLabel>
                  <Typography variant="body1" sx={{ color: colors.white }}>
                    {step.label}
                  </Typography>
                </StepLabel>
              </Step>
            ))}
          </LineStepper>
        </Box>
      </Box>
    </>
  );
};
