import axios from "axios";
const APIKEY = process.env.REACT_APP_APIKEY;
const SHEETURL = `https://sheets.googleapis.com/v4/spreadsheets/1-U8Ea9o9bnST5pzckC8lzwNNK_jO6kIVUAi5Uu_-Ltc?includeGridData=true&key=${APIKEY}`;

export const axiosGetAllRows = async (sheetNumber) => {
  const response = await axios.get(SHEETURL);
  console.log(response);
  return response.data.sheets[sheetNumber].data[0];
};
