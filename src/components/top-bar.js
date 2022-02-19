import {
  Box,
  Heading,
  Link,
  Text,
  Stack,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faTable,
  faVirusCovid,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const TopBar = () => {
  return (
    <>
      <Box pt={3} pb={4}>
        <Flex
          direction="row"
          align="baseline"
          spacing="5"
          justify="space-between"
        >
          <Heading mb={2} size="2xl">
            <span style={{ marginRight: "5px", fontSize: "30px" }}>
              <FontAwesomeIcon icon={faVirusCovid} />{" "}
            </span>
            wa covid exposure sites
          </Heading>
          <Link
            _hover={{ color: "white" }}
            fontSize="xs"
            color="gray"
            isExternal
            href="https://github.com/l3onwu/wa-covid-sites"
          >
            <span style={{ marginRight: "10px", fontSize: "30px" }}>
              <FontAwesomeIcon icon={faGithub} />
            </span>
            {/* If you'd like to contribute, please visit the Github page */}
          </Link>
        </Flex>
        <Link
          isExternal
          href="https://docs.google.com/spreadsheets/d/1-U8Ea9o9bnST5pzckC8lzwNNK_jO6kIVUAi5Uu_-Ltc/edit#gid=764272496"
        >
          <Text mb={1} color="yellow">
            <span style={{ marginRight: "10px", fontSize: "18px" }}>
              <FontAwesomeIcon icon={faTable} />
            </span>
            Displaying data from the community-collected WA covid sites
            spreadsheet{" "}
          </Text>
          <Text style={{ color: "gray", fontSize: "12px" }}>
            courtesy of Michael Sarich
          </Text>
        </Link>

        <Stack
          direction={["column", "column", "column", "row"]}
          spacing={[1, 1, 1, 5]}
          alignItems="baseline"
        >
          {/* <Link
            href="https://www.google.com/maps/d/u/0/viewer?mid=1CJMuhkDKBUB2DQ9h05Z8q0nfGs3xZYQC&ll=-32.40071016940837%2C116.19045146658974&z=8"
            fontSize="sm"
            isExternal
          >
            <span style={{ marginRight: "10px", fontSize: "18px" }}>
              <FontAwesomeIcon icon={faMapLocationDot} />
            </span>
            Click here for a useful google maps of exposure sites
          </Link> */}
        </Stack>
      </Box>
      {/* <Divider /> */}
    </>
  );
};

export default TopBar;
