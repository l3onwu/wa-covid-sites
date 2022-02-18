import { useState, useEffect } from "react";
import { axiosGetAllRows } from "./services/axios-requests";
import ReactGA from "react-ga";
import extractData from "./services/extract-data";
import { Container, Box, Flex, Spinner, Tag } from "@chakra-ui/react";
import TopBar from "./components/top-bar";
import DataTable from "./components/data-table";
import FilterButtons from "./components/filter-buttons";
import ShowMoreButton from "./components/show-more-button";

const App = () => {
  // Local state
  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [pagination, setPagination] = useState(0);
  // Functions
  const changeSheetHandler = (num, filterName) => {
    const f = () => {
      setPagination(0);
      setFilter(filterName);
      setup(num);
    };
    return f;
  };
  const paginationHandler = () => {
    setPagination(pagination + 1);
  };
  // Analytics
  ReactGA.initialize(process.env.REACT_APP_GID);
  const setup = async (sheetNumber = 0) => {
    setLoading(true);
    ReactGA.pageview(window.location.pathname + window.location.search);
    try {
      // Returns an object with arrays attached to properties columnMetada, rowData, rowMetada
      const dataObject = await axiosGetAllRows(sheetNumber);
      const [eHeaders, eRows] = extractData(dataObject);
      setHeaders(eHeaders);
      setRows(eRows);
      setLoading(false);
    } catch (err) {
      alert(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    setup();
  }, []);
  return (
    <Box background="#1D2025" minH="100vh">
      <Container pb="100px" maxW="900px" borderBlock={1}>
        <Box color="white">
          {/* Top Bar */}
          <TopBar />
          {/* Loading spinner */}
          {loading && (
            <Spinner
              size="xl"
              color="teal"
              position="fixed"
              left="50%"
              top="50%"
              ml="-20px"
              mt="-40px"
            />
          )}
          {/* Exposure Sites Heading */}
          <Box mb={5}>
            <Tag
              py={1}
              variant="outline"
              colorScheme="orange"
              mb={6}
              fontSize="xl"
            >
              COVID exposures have been reported at the following locations
            </Tag>
            <FilterButtons
              changeSheetHandler={changeSheetHandler}
              filter={filter}
            />
          </Box>
          {/* Exposure Sites Table */}

          {!loading && (
            <Flex direction="column" justify="center">
              <Box mb={5}>
                <DataTable
                  headers={headers}
                  rows={rows}
                  pagination={pagination}
                />
              </Box>
              <ShowMoreButton paginationHandler={paginationHandler} />
            </Flex>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default App;
