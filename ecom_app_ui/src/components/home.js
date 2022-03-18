import React from "react";
import Navbar from "./navbar";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://media.istockphoto.com/photos/women-is-holding-handbag-near-luxury-car-picture-id1271796113?b=1&k=20&m=1271796113&s=170667a&w=0&h=9vvvXq3GIokXs66KpwgKfJoIDYyQW9TEBXOWZSXhzX0=",
  },
  {
    label: "Bird",
    imgPath:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/09/11/womens-handbag-bacteria.jpg?quality=75&width=1200&auto=webp",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://media.istockphoto.com/photos/young-woman-searching-in-her-purse-picture-id1322530909?b=1&k=20&m=1322530909&s=170667a&w=0&h=8srOIu52vjWEkBjbqfgtSr2qo8ukiLeiSu_-8u-74u4=",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://cdn.pixabay.com/photo/2016/06/25/12/50/handbag-1478814__480.jpg",
  },
];

export default function Home() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <div>
      <Navbar />
      <Box sx={{ maxWidth: 2000, flexGrow: 1 }} mx={20} my={2}>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 555,
                    display: "block",
                    maxWidth: 2000,
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
      <Box sx={{ maxWidth: 1400, flexGrow: 1 }} mx={30} my={2}>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 200,
            px: 4,
            py: 4,
            fontSize: 30,
            fontStyle: "oblique"
          }}>
          <Box>
            Bags that are as strong &amp; resilient as your relationship that lasts through the tug of wars of life, that add new shades of colour to each day, some vibrant &amp; bright, some dark &amp; sexy! Bags that are as fun &amp; adventurous as you both are! Cheers to bagging each others love &amp; trust all throughout. Explore our Resilient, Strong, Fun &amp; Gorgeous Collection for the two of you!
          </Box>
        </Paper>
      </Box>
    </div>
  );
}
