import { v4 as uuidv4 } from "uuid";
import { Box, Text } from "@chakra-ui/react";

const DataCardList = ({ rows, headers }) => {
  return (
    <>
      {rows.map((row) => {
        return <DataCard row={row} headers={headers} key={uuidv4()} />;
      })}
    </>
  );
};

const DataCard = ({ row, headers }) => {
  return (
    <Box
      p={1}
      mb={5}
      borderBottomWidth={1}
      borderWidthBottom={1}
      borderRadius={0}
      borderColor="#4f4f4f"
    >
      {headers.map((header) => {
        return (
          <Box mb={2} key={uuidv4()}>
            <Text
              fontSize="8px"
              textTransform="uppercase"
              fontWeight="bold"
              color="yellow"
            >
              {header}
            </Text>
            <Text fontSize="14px">{row[header]}</Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default DataCardList;
