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
      p={4}
      mb={5}
      borderBottomWidth={1}
      borderWidthBottom={1}
      borderRadius={0}
      borderColor="gray.500"
    >
      {headers.map((header) => {
        return (
          <Box mb={3} key={uuidv4()}>
            <Text
              fontSize="xs"
              textTransform="uppercase"
              fontWeight="bold"
              color="yellow"
            >
              {header}
            </Text>
            <Text fontSize="xl">{row[header]}</Text>
          </Box>
        );
      })}
    </Box>
  );
};

export default DataCardList;
