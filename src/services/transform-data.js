export const filterData = (rows, filter) => {
  let filteredRows = [];
  // Filter by filter
  if (filter === "all") {
    filteredRows = rows.filter((row) => {
      return row;
    });
  }
  if (filter === "schools") {
    filteredRows = rows.filter((row) => {
      return row.IsSchool === "1";
    });
  }
  if (filter === "north") {
    filteredRows = rows.filter((row) => {
      return row["Region"] === "Perth - North";
    });
  }
  if (filter === "south") {
    filteredRows = rows.filter((row) => {
      return row["Region"] === "Perth - South";
    });
  }
  if (filter === "east") {
    filteredRows = rows.filter((row) => {
      return row["Region"] === "Perth - East";
    });
  }
  return filteredRows;
};

export const sortRecentData = (rows, recent) => {
  let recentRows = [];
  if (recent) {
    recentRows = rows.filter((row) => {
      return row["Recent"];
    });
    recentRows.sort((a, b) => {
      return a["Recent"] - b["Recent"];
    });
  } else {
    recentRows = rows.filter((row) => {
      return row;
    });
  }
  return recentRows;
};

export const paginateData = (rows, pagination) => {
  let pageCounter = pagination;
  let paginationEnd = false;
  const paginatedRows = [];
  for (let i = 0; i < rows.length; i++) {
    if (i > 19 && i % 20 === 0) {
      if (pageCounter) {
        pageCounter--;
      } else {
        break;
      }
    }
    if (i === rows.length - 1) {
      paginationEnd = true;
    }
    paginatedRows.push(rows[i]);
  }
  return [paginatedRows, paginationEnd];
};
