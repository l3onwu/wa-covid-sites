import { v4 as uuidv4 } from "uuid";
import { Box, Text, Stack, Square } from "@chakra-ui/react";

const DataCardList = ({ rows }) => {
  return (
    <Box borderTopWidth={1} borderColor="#4f4f4f">
      {rows.map((row) => {
        return <DataCard row={row} key={uuidv4()} />;
      })}
    </Box>
  );
};

const DataCard = ({ row }) => {
  return (
    <Stack
      direction="column"
      spacing={3}
      p={1}
      pt={5}
      pb={5}
      borderBottomWidth={1}
      borderColor="#4f4f4f"
    >
      {row["Recent"] && (
        <Stack direction="row" spacing={2} align="center">
          <Square
            backgroundColor="red.500"
            width="9px"
            height="9px"
            borderRadius="100%"
          />{" "}
          <Text fontSize="12px" color="gray" fontStyle="italic">
            Updated {Math.round((row["Recent"] / 1000 / 60 / 60) * 1) / 1}{" "}
            {Math.round((row["Recent"] / 1000 / 60 / 60) * 1) / 1 !== 1
              ? "hours"
              : "hour"}{" "}
            ago
          </Text>
        </Stack>
      )}
      <Box>
        <Text
          fontSize="8px"
          textTransform="uppercase"
          fontWeight="bold"
          color="yellow"
        >
          Date and Time
        </Text>
        <Text fontSize="14px" color="gray">
          {row["objectDate"].weekdayLong} - {row["ExposureRange"]}
        </Text>
      </Box>
      <Box>
        <Text
          fontSize="8px"
          textTransform="uppercase"
          fontWeight="bold"
          color="yellow"
        >
          Exposure Site
        </Text>
        <Text fontSize="20px">{row["Business Name"]}</Text>
      </Box>
      {/* <Box>
        <Text
          fontSize="8px"
          textTransform="uppercase"
          fontWeight="bold"
          color="yellow"
        >
          Suburb
        </Text>
        <Text fontSize="14px" color="gray">
          {row["Suburb"]}
        </Text>
      </Box> */}

      <Box>
        <Text
          fontSize="8px"
          textTransform="uppercase"
          fontWeight="bold"
          color="yellow"
        >
          Address
        </Text>
        <Text fontSize="14px" color="gray">
          {row["FullAddress"]}
        </Text>
      </Box>
      <Box>
        <Text
          fontSize="8px"
          textTransform="uppercase"
          fontWeight="bold"
          color="yellow"
        >
          Verified By
        </Text>
        <Text fontSize="14px" color="gray">
          {row["VerifedBy"]}
        </Text>
      </Box>
    </Stack>
  );
};

export default DataCardList;
