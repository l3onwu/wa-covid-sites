import { useState, useEffect } from "react";
import axiosGetAllRows from "./services/axios-requests";
import ReactGA from "react-ga";
import extractData from "./services/extract-data";
import {
  filterData,
  sortRecentData,
  paginateData,
} from "./services/transform-data";
import {
  Container,
  Box,
  Flex,
  Spinner,
  Tag,
  Center,
  Stack,
  Text,
  Checkbox,
} from "@chakra-ui/react";
import TopBar from "./components/top-bar";
import DataTable from "./components/data-table";
import DataCardList from "./components/data-card-list";
import FilterButtons from "./components/filter-buttons";
import ShowMoreButton from "./components/show-more-button";
import AccordionMap from "./components/accordion-map";

const App = () => {
  // Local state
  const [offline, setOffline] = useState(true);
  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [recent, setRecent] = useState(false);
  const [pagination, setPagination] = useState(0);

  // Functions
  const filterHandler = (filterName) => {
    const f = () => {
      setLoading(true);
      setPagination(0);
      setFilter(filterName);
      setTimeout(() => {
        setLoading(false);
      }, 250);
    };
    return f;
  };
  const recentHandler = () => {
    setLoading(true);
    setPagination(0);
    setRecent(!recent);
    setTimeout(() => {
      setLoading(false);
    }, 250);
  };
  const paginationHandler = () => {
    setPagination(pagination + 1);
  };

  // Filter, sort, paginate - data pipeline
  const filteredRows = filterData(rows, filter);
  const recentRows = sortRecentData(filteredRows, recent);
  const [paginatedRows, paginationEnd] = paginateData(recentRows, pagination);

  // Analytics
  ReactGA.initialize(process.env.REACT_APP_GID);

  // Fetch data on setup
  const setup = async () => {
    setLoading(true);
    ReactGA.pageview(window.location.pathname + window.location.search);
    // try {
    //   // Returns an object with arrays attached to properties columnMetada, rowData, rowMetada
    //   const dataObject = await axiosGetAllRows();
    //   const [eHeaders, eRows] = extractData(dataObject);
    //   // Sort by datetime
    //   eRows.sort((a, b) => {
    //     return b.objectDate.ts - a.objectDate.ts;
    //   });
    //   setHeaders(eHeaders);
    //   setRows(eRows);
    //   setLoading(false);
    // } catch (err) {
    //   alert("Error retrieving data, please refresh the page");
    //   console.log(err);
    //   setLoading(false);
    // }
  };
  useEffect(() => {
    setup();
  }, []);

  // Main
  return (
    <Box background="#1D2025" minH="100vh" overflow="scroll">
      <Container pb="100px" maxW="1000px" borderBlock={1}>
        {offline && (
          <Flex height="100vh" width="100%" justify="center" align="center">
            <Text>
              wacovidsites.com is currently offline. Sorry for the
              inconvenience.
            </Text>
          </Flex>
        )}
        {!offline && (
          <Box color="white">
            {/* Top Bar */}
            <TopBar />
            <Box mb={10} display={["none", "none", "block"]}>
              <AccordionMap />
            </Box>
            {/* Exposure Sites Heading */}
            <Box mb={7}>
              <Tag
                py={1}
                variant="outline"
                colorScheme="orange"
                mb={6}
                fontSize="xl"
              >
                COVID exposures have been reported at the following locations
              </Tag>
              <Stack mb={8} direction="row" align="center">
                <Checkbox
                  // size="sm"
                  colorScheme="red"
                  onChange={recentHandler}
                >
                  <Text fontSize="12px" fontStyle="italic">
                    Click to view exposure sites updated in the last 48 hours
                  </Text>
                </Checkbox>
              </Stack>
              <FilterButtons filterHandler={filterHandler} filter={filter} />
            </Box>
            {/* Loading spinner */}
            {loading && (
              <Center mt={10}>
                <Spinner size="xl" color="teal" />
              </Center>
            )}
            {/* Exposure Sites Table */}
            {!loading && paginatedRows && (
              <Flex direction="column" justify="center">
                <Box>
                  <Box display={["block", "block", "none"]} mb={5}>
                    <DataCardList
                      headers={headers}
                      rows={paginatedRows}
                      pagination={pagination}
                    />
                  </Box>
                  <Box display={["none", "none", "block"]} mb={5}>
                    <DataTable
                      headers={headers}
                      rows={paginatedRows}
                      pagination={pagination}
                    />
                  </Box>
                </Box>
                <ShowMoreButton
                  paginationEnd={paginationEnd}
                  paginationHandler={paginationHandler}
                />
              </Flex>
            )}
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default App;
