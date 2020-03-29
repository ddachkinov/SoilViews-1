import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import CenteredTabs from './LandChoser2'
import LandChoser3 from './LandChoser3'

import { Select } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Welcome', 'Select Land Input', 'Choose culture type', 'Payment', 'Review your order'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
        return 'Welcome';
    case 1:
      return <LandChoser3/>;
    case 2:
      return 'Checkbox items to choose from';
    case 3:
      return 'Different payments methods';
    case 4:
      return 'Order review - show everything selected';
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleDone = () => {
    window.alert('Done')
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Review' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper 
          square elevation={0} 
          className={classes.resetContainer}
        >
          <Typography>Thank you for your order. You can track its progress on 'My Orders' page</Typography>
          <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.button}
          >
            Back
          </Button>
          <Button 
            onClick={handleDone} 
            className={classes.button}
            color="primary"
            variant="contained"
          >
            Finish
          </Button>
        </Paper>
      )}
    </div>
  );
}
