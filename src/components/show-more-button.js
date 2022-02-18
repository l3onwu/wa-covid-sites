import { Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ShowMoreButton = ({ paginationHandler }) => {
  return (
    <Button onClick={paginationHandler} size="sm" colorScheme="orange">
      <ChevronDownIcon mr={1} />
      Show 25 More
    </Button>
  );
};

export default ShowMoreButton;
