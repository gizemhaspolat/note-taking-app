import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Text,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";

import { deleteNote } from "../redux/notes/notesSlice";

const NoteCards = () => {
  const dispatch = useDispatch();
  const addedNotes = useSelector((state) => state.notes.notes);

  return (
    <>
      {addedNotes.map((note) => (
        <Card
          key={note.id}
          width={"200px"}
          height={"150px"}
          margin={"10px"}
          borderRadius={"10px"}
        >
          <CardHeader bgColor={note.color} padding={10}>
            <Text fontSize={"20px"} fontWeight={"bold"}>
              {note.content}
            </Text>
          </CardHeader>
          <CardBody>
            <Text fontSize={"15px"} fontWeight={"bold"}>
              {note.content}
            </Text>
          </CardBody>
          <CardFooter>
            <Button
              onClick={() => dispatch(deleteNote(note.id))}
              bgColor={"red"}
              color={"white"}
              borderRadius={"10px"}
              margin={"10px"}
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default NoteCards;
