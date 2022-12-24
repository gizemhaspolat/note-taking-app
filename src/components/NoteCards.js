import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Flex,
  Divider,
  Text,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";

import { deleteNote } from "../redux/notes/notesSlice";

const NoteCards = () => {
  const dispatch = useDispatch();
  const addedNotes = useSelector((state) => state.notes.notes);

  return (
    <Flex
      flexDir={"row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"10px"}
      marginX={"auto"}
    >
      {addedNotes.map((note) => (
        <Card
          key={note.id}
          width={"300px"}
          height={"200px"}
          margin={"10px"}
          borderRadius={"10px"}
          boxShadow={"lg"}
        >
          <CardHeader color={"white"} bgColor={note.color} padding={2}>
            <Text fontSize={"20px"} fontWeight={"bold"}>
              Note {addedNotes.indexOf(note) + 1}
            </Text>
          </CardHeader>
          <CardBody padding={2} overflow={"auto"}>
            <Text fontSize={"15px"}>{note.content}</Text>
          </CardBody>
          <Divider />
          <CardFooter padding={2} display={"flex"} justifyContent={"center"}>
            <Button
              onClick={() => dispatch(deleteNote(note.id))}
              bgColor={"red"}
              color={"white"}
              borderRadius={"10px"}
              margin={"5px"}
              size={"sm"}
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </Flex>
  );
};

export default NoteCards;
