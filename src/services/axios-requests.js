import axios from "axios";
const APIKEY = process.env.REACT_APP_APIKEY;
const SHEETURL = `https://sheets.googleapis.com/v4/spreadsheets/12fN17qFR8ruSk2yf29CR1S6xZMs_nve2ww_6FJk7__8?includeGridData=true&key=${APIKEY}`;

const axiosGetAllRows = async (sheetNumber = 0) => {
  const response = await axios.get(SHEETURL);
  return response.data.sheets[sheetNumber].data[0];
};

export default axiosGetAllRows;
