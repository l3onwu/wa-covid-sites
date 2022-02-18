import { useState, useEffect } from "react";
import { axiosGetAllRows } from "./services/axios-requests";
import ReactGA from "react-ga";
import extractData from "./services/extract-data";
import {
  Container,
  Box,
  Flex,
  Spinner,
  Tag,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Center,
} from "@chakra-ui/react";
import TopBar from "./components/top-bar";
import DataTable from "./components/data-table";
import DataCardList from "./components/data-card-list";
import FilterButtons from "./components/filter-buttons";
import ShowMoreButton from "./components/show-more-button";
import AccordionMap from "./components/accordion-map";

const App = () => {
  // Local state
  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [pagination, setPagination] = useState(0);
  const [alertMessage, setAlertMessage] = useState(false);

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
  // Transform data
  const paginateRows = [];
  const transformRows = () => {
    let pageCounter = pagination;
    for (let i = 0; i < rows.length; i++) {
      if (i > 24 && i % 25 === 0) {
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
  // Analytics
  ReactGA.initialize(process.env.REACT_APP_GID);
  // Fetch data
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
    <Box background="#1D2025" minH="100vh" overflow="scroll">
      {alertMessage && (
        <Alert mb={3} status="info">
          <AlertIcon />
          <AlertTitle mr={2}>New features coming soon</AlertTitle>
          <AlertDescription>
            Adding the ability to sort exposure sites, and display most recently
            updated.
          </AlertDescription>
          <CloseButton
            onClick={() => {
              setAlertMessage(false);
            }}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      )}
      <Container pb="100px" maxW="900px" borderBlock={1}>
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
            <FilterButtons
              changeSheetHandler={changeSheetHandler}
              filter={filter}
            />
          </Box>
          {/* Loading spinner */}
          {loading && (
            <Center mt={10}>
              <Spinner size="xl" color="teal" />
            </Center>
          )}
          {/* Exposure Sites Table */}
          {!loading && transformRows && (
            <Flex direction="column" justify="center">
              <Box>
                <Box display={["block", "block", "none"]} mb={5}>
                  <DataCardList
                    headers={headers}
                    rows={paginateRows}
                    pagination={pagination}
                  />
                </Box>
                <Box display={["none", "none", "block"]} mb={5}>
                  <DataTable
                    headers={headers}
                    rows={paginateRows}
                    pagination={pagination}
                  />
                </Box>
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
