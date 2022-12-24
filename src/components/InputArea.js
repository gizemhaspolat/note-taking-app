import {
  Textarea,
  Stack,
  Checkbox,
  Flex,
  Button,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addNote } from "../redux/notes/notesSlice";

export const colors = [
  "lightpink",
  "chocolate",
  "cornflowerblue",
  "moccasin",
  "mediumseagreen",
];

export const InputArea = () => {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("");

  const dispatch = useDispatch();

  const handleAddNote = (e) => {
    if (value === "") return;
    e.preventDefault();
    dispatch(addNote(value, color));
    setValue("");
    setColor("");
  };

  const checked = (id) => {
    return color === id;
  };

  return (
    <>
      <Flex
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems="center"
        mb={10}
        padding={"10px"}
        marginX={"auto"}
      >
        <Stack
          direction="column"
          spacing={2}
          align="center"
          padding={"10px"}
          width={"10%"}
          mx={"10px"}
        >
          <Text fontSize={"sm"} fontWeight={"bold"} color={"blue.500"} as="u">
            Select Color
          </Text>
          {colors.map((color) => (
            <Checkbox
              id={color}
              border={`6px solid ${color}`}
              borderRadius="50%"
              iconColor={`${color}.100`}
              bgColor={`${color}`}
              variant="transparent"
              size="sm"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              isChecked={checked(color)}
            ></Checkbox>
          ))}
        </Stack>
        <Textarea
          placeholder="Write down your note here"
          border={"1px solid blue"}
          borderRadius={"5px"}
          minHeight={"170px"}
          padding={"10px"}
          width={"50%"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          position={"relative"}
          marginTop={"28px"}
          marginX={"10px"}
        ></Textarea>
        <Button
          onClick={handleAddNote}
          disabled={!value || !color}
          colorScheme="blue"
          variant={"solid"}
          width={"10%"}
          height={"40px"}
          padding={"10px"}
          margin={"10px"}
          borderRadius={"5px"}
          minWidth={"100px"}
          position={"absolute"}
          right={"20%"}
          top={"320px"}
        >
          Add Note
        </Button>
      </Flex>
    </>
  );
};

export default InputArea;
