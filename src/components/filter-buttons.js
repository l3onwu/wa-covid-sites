import { Stack, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";

const FilterButtons = ({ changeSheetHandler, filter }) => {
  return (
    <Stack direction="row">
      <Button
        onClick={changeSheetHandler(0, "all")}
        colorScheme={filter === "all" ? "teal" : "white"}
        size="sm"
      >
        All locations
      </Button>
      <Button
        onClick={changeSheetHandler(1, "schools")}
        colorScheme={filter === "schools" ? "teal" : "white"}
        size="sm"
      >
        <FontAwesomeIcon icon={faBus} style={{ marginRight: "5px" }} />
        Schools
      </Button>
      <Button
        onClick={changeSheetHandler(2, "north")}
        colorScheme={filter === "north" ? "teal" : "white"}
        size="sm"
      >
        North
      </Button>
      <Button
        onClick={changeSheetHandler(3, "south")}
        colorScheme={filter === "south" ? "teal" : "white"}
        size="sm"
      >
        South
      </Button>
      <Button
        onClick={changeSheetHandler(4, "east")}
        colorScheme={filter === "east" ? "teal" : "white"}
        size="sm"
      >
        East
      </Button>
      <Button
        onClick={changeSheetHandler(5, "west")}
        colorScheme={filter === "west" ? "teal" : "white"}
        size="sm"
      >
        West
      </Button>
    </Stack>
  );
};

export default FilterButtons;
