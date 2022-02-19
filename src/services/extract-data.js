import { DateTime } from "luxon";

const extractData = (dataObject) => {
  const rowData = dataObject.rowData;
  // Extract headers
  const tempHeaders = [];
  for (let i = 0; i < rowData[0].values.length; i++) {
    const cell = rowData[0].values[i]["formattedValue"];
    tempHeaders.push(cell);
  }
  // Extract rows
  const tempRows = [];
  for (let j = 0 + 1; j < rowData.length; j++) {
    const rowObject = {};
    for (let k = 0; k < rowData[j].values.length; k++) {
      const cell = rowData[j].values[k]["formattedValue"];
      rowObject[tempHeaders[k]] = cell;
    }
    if (rowObject["Date"]) {
      // Create an UpdatedTime object for sorting recent entries
      const updateDate = rowObject["12/02/2022 21:35:05"];
      const parseUpdateDate = DateTime.fromFormat(
        updateDate,
        "dd/LL/yyyy HH:mm:ss"
      );
      rowObject["updateDate"] = parseUpdateDate;
      const now = new Date();
      const twoDaysAgo = now - 2 * 86400000;
      if (parseUpdateDate.ts > twoDaysAgo) {
        rowObject["Recent"] = now - parseUpdateDate.ts;
      } else {
        rowObject["Recent"] = false;
      }
      // Create a data object of FromTime for sorting
      const rawDate = rowObject["Date"];
      const rawTime =
        rowObject["TimeUnknown"] === "0" ? rowObject["FromTime"] : "00:00:01";
      const datetimeConstructor = `${rawDate} ${rawTime}`;
      const parseDate = DateTime.fromFormat(
        datetimeConstructor,
        "dd/LL/yyyy HH:mm:ss"
      );
      rowObject["objectDate"] = parseDate;
    }
    // Stop extracting at empty row
    if (!rowObject["Business Name"]) {
      break;
    }
    tempRows.push(rowObject);
  }
  return [tempHeaders, tempRows];
};

export default extractData;
