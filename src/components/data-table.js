import { v4 as uuidv4 } from "uuid";
import { Table, Tbody, Thead, Th, Tr, Td } from "@chakra-ui/react";

const DataTable = ({ headers, rows, pagination }) => {
  const paginateRows = [];
  const transformRows = () => {
    let pageCounter = pagination;
    for (let i = 0; i < rows.length; i++) {
      if (i > 24 && i % 25 === 0) {
        console.log(pageCounter);
        if (pageCounter) {
          pageCounter--;
        } else {
          break;
        }
      }
      paginateRows.push(rows[i]);
    }
  };
  transformRows();
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
        {paginateRows.map((row) => {
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
