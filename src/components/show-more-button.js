import { Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const ShowMoreButton = ({ paginationHandler, paginationEnd }) => {
  return (
    <>
      {!paginationEnd ? (
        <Button onClick={paginationHandler} size="sm" colorScheme="orange">
          <ChevronDownIcon mr={1} />
          Show more
        </Button>
      ) : (
        <Button disabled size="sm" colorScheme="gray" color="black">
          <ChevronDownIcon mr={1} />
          No more sites
        </Button>
      )}
    </>
  );
};

export default ShowMoreButton;
