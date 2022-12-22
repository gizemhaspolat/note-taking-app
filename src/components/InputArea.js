import { Textarea, Stack, Checkbox, Flex, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addNote } from "../redux/notes/notesSlice";

const colors = [
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
    dispatch(addNote({ content: value, color: color }));
    setValue("");
  };

  return (
    <>
      <Flex flexDirection={"row"} justifyContent={"center"} alignItems="center">
        <Stack
          direction="column"
          spacing={2}
          align="center"
          padding={"10px"}
          width={"10%"}
        >
          {colors.map((color) => (
            <Checkbox
              key={color}
              border={`5px solid ${color}`}
              borderRadius="50%"
              iconColor={`${color}.100`}
              bgColor={`${color}`}
              variant="transparent"
              onChange={(e) => setColor(e.target.value)}
            ></Checkbox>
          ))}
        </Stack>
        <Textarea
          placeholder="Write down your note here"
          border={"1px solid blue"}
          borderRadius={"5px"}
          resize={"none"}
          height={"200px"}
          width={"60%"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          position={"relative"}
        ></Textarea>
        <Button
          onClick={handleAddNote}
          colorScheme="blue"
          variant={"solid"}
          width={"10%"}
          height={"40px"}
          padding={"10px"}
          borderRadius={"5px"}
          position={"absolute"}
          right={"17%"}
          top={"55%"}
          minWidth={"100px"}
        >
          Add Note
        </Button>
      </Flex>
    </>
  );
};

export default InputArea;
