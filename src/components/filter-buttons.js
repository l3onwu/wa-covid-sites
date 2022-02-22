import { Stack, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";

const FilterButtons = ({ filterHandler, filter }) => {
  return (
    <Stack direction={["column", "row", "row"]}>
      <Button
        onClick={filterHandler("all")}
        colorScheme={filter === "all" ? "teal" : "white"}
        size="sm"
      >
        All locations
      </Button>
      <Button
        onClick={filterHandler("schools")}
        colorScheme={filter === "schools" ? "teal" : "white"}
        size="sm"
      >
        <FontAwesomeIcon icon={faBus} style={{ marginRight: "5px" }} />
        Schools
      </Button>
      <Button
        onClick={filterHandler("north")}
        colorScheme={filter === "north" ? "teal" : "white"}
        size="sm"
      >
        North
      </Button>
      <Button
        onClick={filterHandler("south")}
        colorScheme={filter === "south" ? "teal" : "white"}
        size="sm"
      >
        South
      </Button>
      <Button
        onClick={filterHandler("east")}
        colorScheme={filter === "east" ? "teal" : "white"}
        size="sm"
      >
        East
      </Button>
    </Stack>
  );
};

export default FilterButtons;
