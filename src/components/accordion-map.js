import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";

const AccordionMap = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <span style={{ marginRight: "10px", fontSize: "18px" }}>
                <FontAwesomeIcon icon={faMapLocationDot} />
              </span>
              View map{" "}
              <span style={{ color: "gray", fontSize: "12px" }}>
                courtesy of Michael Riecken
              </span>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <iframe
            title="map"
            src="https://www.google.com/maps/d/embed?mid=1CJMuhkDKBUB2DQ9h05Z8q0nfGs3xZYQC&ehbc=2E312F"
            width="640"
            height="480"
          ></iframe>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionMap;
