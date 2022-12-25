import {
  Input,
  InputGroup,
  Button,
  InputRightElement,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchNote } from "../redux/notes/notesSlice";

import ColorFilterNotes from "./ColorFilterNotes";

const SearchNotes = () => {
  const dispatch = useDispatch();
  const [searchWord, setSearchWord] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchNote(searchWord));
    setSearchWord("");
  };

  return (
    <Flex flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
      <InputGroup display={"flex"} flexDirection={"row"} maxW={"500px"}>
        <Input
          pr="4.5rem"
          type="text"
          placeholder="Find the note you are looking for"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          marginX={{ base: "5px", sm: "10px" }}
          fontSize={{ base: "sm", md: "md" }}
        />
        <InputRightElement width="6rem" pr={"16px"}>
          <Button
            h="1.75rem"
            w={"6rem"}
            size="sm"
            type="submit"
            onClick={handleSearch}
            px={2}
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
      <ColorFilterNotes />
    </Flex>
  );
};

export default SearchNotes;
