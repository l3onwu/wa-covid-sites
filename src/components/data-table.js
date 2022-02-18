import { v4 as uuidv4 } from "uuid";
import { Table, Tbody, Thead, Th, Tr, Td } from "@chakra-ui/react";

const DataTable = ({ headers, rows }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          {headers.map((header) => {
            return (
              <Th color="yellow" key={uuidv4()}>
                {header}
              </Th>
            );
          })}
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row) => {
          return (
            <Tr key={uuidv4()} _hover={{ background: "#364142" }}>
              {headers.map((header) => {
                return <Td key={uuidv4()}>{row[header]}</Td>;
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};

export default DataTable;
