import { Stack, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";

const FilterButtons = ({ changeSheetHandler, filter }) => {
  return (
    <Stack direction={["column", "row", "row"]}>
      <Button
        onClick={changeSheetHandler("all")}
        colorScheme={filter === "all" ? "teal" : "white"}
        size="sm"
      >
        All locations
      </Button>
      <Button
        onClick={changeSheetHandler("schools")}
        colorScheme={filter === "schools" ? "teal" : "white"}
        size="sm"
      >
        <FontAwesomeIcon icon={faBus} style={{ marginRight: "5px" }} />
        Schools
      </Button>
      <Button
        onClick={changeSheetHandler("north")}
        colorScheme={filter === "north" ? "teal" : "white"}
        size="sm"
      >
        North
      </Button>
      <Button
        onClick={changeSheetHandler("south")}
        colorScheme={filter === "south" ? "teal" : "white"}
        size="sm"
      >
        South
      </Button>
      <Button
        onClick={changeSheetHandler("east")}
        colorScheme={filter === "east" ? "teal" : "white"}
        size="sm"
      >
        East
      </Button>
    </Stack>
  );
};

export default FilterButtons;
