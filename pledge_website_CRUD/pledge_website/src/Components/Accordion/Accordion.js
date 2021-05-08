import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import { Data } from "./Accordion_Data";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Accordion = withStyles({
  root: {
    border: "5px solid var(--clr-main-shade-2)",
    borderRadius: 10,

    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    borderRadius: 1,
    backgroundColor: "var(--clr-main-tint-3)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    backgroundColor: "var(--clr-grey-10)",
  },
}))(MuiAccordionDetails);

const WhiteTextTypography = withStyles({
  root: {
    color: "#000000",
    fontSize: 18,
  },
})(Typography);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [symbolToggle, setSymbolToggle] = useState(true);

  const accordToggle = () => {
    setSymbolToggle(!symbolToggle);
  };

  return (
    <div className="accordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{Data[0].title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{Data[0].summary}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <WhiteTextTypography>{Data[1].title}</WhiteTextTypography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{Data[1].summary}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <WhiteTextTypography>{Data[2].title}</WhiteTextTypography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{Data[2].summary}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
