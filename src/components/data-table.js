import { v4 as uuidv4 } from "uuid";
import {
  Table,
  Tbody,
  Thead,
  Th,
  Tr,
  Td,
  Square,
  Text,
  Stack,
} from "@chakra-ui/react";

const DataTable = ({ rows }) => {
  return (
    <Table fontSize="14px">
      <Thead>
        <Tr>
          <Th color="yellow" borderColor="#4f4f4f"></Th>

          <Th color="yellow" width="155px" borderColor="#4f4f4f">
            Exposure Site
          </Th>
          <Th color="yellow" borderColor="#4f4f4f">
            Suburb
          </Th>
          <Th color="yellow" width="290px" borderColor="#4f4f4f">
            Date and Time
          </Th>
          <Th color="yellow" borderColor="#4f4f4f">
            Address
          </Th>

          <Th width="50px" color="yellow" borderColor="#4f4f4f">
            Verified
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row) => {
          return (
            <Tr key={uuidv4()} _hover={{ background: "#272e30" }}>
              {row["Recent"] ? (
                <Td borderColor="#4f4f4f">
                  <Stack direction="column" spacing={2}>
                    <Square
                      backgroundColor="red.500"
                      width="9px"
                      height="9px"
                      borderRadius="100%"
                    />{" "}
                    <Text fontSize="12px" color="gray" fontStyle="italic">
                      Updated{" "}
                      {Math.round((row["Recent"] / 1000 / 60 / 60) * 1) / 1}{" "}
                      {Math.round((row["Recent"] / 1000 / 60 / 60) * 1) / 1 ===
                      1
                        ? "hour"
                        : "hours"}{" "}
                      ago
                    </Text>
                  </Stack>
                </Td>
              ) : (
                <Td borderColor="#4f4f4f"></Td>
              )}
              <Td borderColor="#4f4f4f">{row["Business Name"]} </Td>
              <Td borderColor="#4f4f4f">{row["Suburb"]} </Td>
              <Td borderColor="#4f4f4f">
                {row["objectDate"].weekdayLong} - {row["ExposureRange"]}{" "}
              </Td>
              <Td borderColor="#4f4f4f">{row["FullAddress"]} </Td>
              <Td borderColor="#4f4f4f">{row["VerifedBy"]} </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default DataTable;
