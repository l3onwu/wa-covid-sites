const extractData = (dataObject) => {
  const rowData = dataObject.rowData;
  // Extract headers
  const tempHeaders = [];
  for (let i = 1; i < rowData[1].values.length; i++) {
    const cell = rowData[1].values[i]["formattedValue"];
    tempHeaders.push(cell);
  }
  // Extract rows
  const tempRows = [];
  rowLoop: for (let j = 2; j < rowData.length; j++) {
    const rowObject = {};
    for (let k = 1; k < rowData[j].values.length; k++) {
      const cell = rowData[j].values[k]["formattedValue"];
      if (!cell) {
        break rowLoop;
      }
      rowObject[tempHeaders[k - 1]] = cell;
    }
    tempRows.push(rowObject);
  }
  return [tempHeaders, tempRows];
};

export default extractData;
